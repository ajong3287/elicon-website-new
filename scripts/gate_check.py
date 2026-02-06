#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gate_check.py - ELICON Project Upgrade Kit Gate Check (강화 버전)

로컬에서 먼저 "컴파일" - 필수 문서 존재 및 품질 검증
01번 수준 품질 게이트 적용 (v1.1-OPS-01BASELINE)
"""

from pathlib import Path
import sys
import re

REQUIRED = [
    "docs/00_SSOT_POINTER.md",
    "docs/01_PROJECT_BRIEF.md",
    "docs/02_SCOPE_AC.md",
    "docs/ops/RUNBOOK.md",
    "docs/decisions/ADR-0001.md",
]

MIN_CONTENT_LENGTH = 50  # 최소 50자 이상
MIN_AC_CHECKBOXES = 6    # AC 체크박스 최소 6개


def check_kpi_exists(brief_text: str) -> bool:
    """PROJECT_BRIEF.md에 KPI 숫자가 1개 이상 존재하는지 확인"""
    # 숫자 + % 또는 숫자 + 개/건/회 패턴 찾기
    kpi_patterns = [
        r'\d+%',           # 50%
        r'월\s*\d+',       # 월 4개
        r'\d+\s*(개|건|회|배)',  # 4개, 2회, 2배
    ]
    for pattern in kpi_patterns:
        if re.search(pattern, brief_text):
            return True
    return False


def count_ac_checkboxes(scope_text: str) -> int:
    """AC 체크박스 개수 카운트 ([ ] 또는 [x])"""
    unchecked = len(re.findall(r'- \[ \]', scope_text))
    checked = len(re.findall(r'- \[x\]', scope_text, re.IGNORECASE))
    return unchecked + checked


def check_runbook_sections(runbook_text: str) -> dict:
    """RUNBOOK에 로그 경로, 롤백 섹션이 비어있지 않은지 확인"""
    results = {"log_path": False, "rollback": False}

    # 로그 경로 섹션 확인 (### 로그 경로 또는 ### 로그 위치)
    log_match = re.search(r'###\s*(로그\s*(경로|위치)|Log)', runbook_text, re.IGNORECASE)
    if log_match:
        # 해당 섹션 이후 내용이 있는지 확인
        section_start = log_match.end()
        next_section = re.search(r'\n###', runbook_text[section_start:])
        section_end = section_start + next_section.start() if next_section else len(runbook_text)
        section_content = runbook_text[section_start:section_end].strip()
        if len(section_content) > 20:  # 최소 20자 이상 내용
            results["log_path"] = True

    # 롤백 섹션 확인
    rollback_match = re.search(r'###\s*(롤백|Rollback)', runbook_text, re.IGNORECASE)
    if rollback_match:
        section_start = rollback_match.end()
        next_section = re.search(r'\n###|\n---|\n##', runbook_text[section_start:])
        section_end = section_start + next_section.start() if next_section else len(runbook_text)
        section_content = runbook_text[section_start:section_end].strip()
        if len(section_content) > 20:
            results["rollback"] = True

    return results


def check_adr_status(adr_text: str) -> bool:
    """ADR-0001 Status가 Accepted인지 확인"""
    return bool(re.search(r'\*\*Status\*\*:\s*Accepted', adr_text, re.IGNORECASE))


def main() -> int:
    root = Path(".").resolve()
    print(f"🔍 Gate Check 실행 (강화 버전): {root.name}")
    print("=" * 60)

    # 1. 필수 문서 존재 확인
    print("\n[1/5] 필수 문서 존재 확인...")
    missing = [p for p in REQUIRED if not (root / p).exists()]

    if missing:
        print("❌ GATE FAIL: 필수 문서 누락")
        for m in missing:
            print(f"   - {m}")
        return 1

    print("✅ 필수 문서 존재 확인 완료")

    # 2. 최소 품질 체크 (너무 빈 문서 방지)
    print("\n[2/5] 문서 최소 길이 검증...")
    for p in REQUIRED:
        text = (root / p).read_text(encoding="utf-8")
        if len(text.strip()) < MIN_CONTENT_LENGTH:
            print(f"❌ GATE FAIL: {p}")
            print(f"   → 내용이 너무 짧습니다 (<{MIN_CONTENT_LENGTH}자). 문서를 채워주세요.")
            return 1

    print("✅ 문서 최소 길이 검증 완료")

    # 3. KPI 존재 확인 (PROJECT_BRIEF.md)
    print("\n[3/5] KPI 존재 확인 (PROJECT_BRIEF.md)...")
    brief_text = (root / "docs/01_PROJECT_BRIEF.md").read_text(encoding="utf-8")
    if not check_kpi_exists(brief_text):
        print("❌ GATE FAIL: docs/01_PROJECT_BRIEF.md")
        print("   → KPI가 없습니다. 숫자로 된 성공 기준을 추가하세요.")
        print("   → 예: '월 4개 이상', '50% 감소', '2배 향상'")
        return 1

    print("✅ KPI 존재 확인 완료")

    # 4. AC 체크박스 개수 확인 (SCOPE_AC.md)
    print(f"\n[4/5] AC 체크박스 확인 (최소 {MIN_AC_CHECKBOXES}개)...")
    scope_text = (root / "docs/02_SCOPE_AC.md").read_text(encoding="utf-8")
    ac_count = count_ac_checkboxes(scope_text)

    if ac_count < MIN_AC_CHECKBOXES:
        print(f"❌ GATE FAIL: docs/02_SCOPE_AC.md")
        print(f"   → AC 체크박스가 {ac_count}개입니다 (최소 {MIN_AC_CHECKBOXES}개 필요)")
        return 1

    print(f"✅ AC 체크박스 확인 완료 ({ac_count}개)")

    # 5. RUNBOOK 로그 경로/롤백 섹션 확인
    print("\n[5/5] RUNBOOK 필수 섹션 확인...")
    runbook_text = (root / "docs/ops/RUNBOOK.md").read_text(encoding="utf-8")
    runbook_check = check_runbook_sections(runbook_text)

    if not runbook_check["log_path"]:
        print("❌ GATE FAIL: docs/ops/RUNBOOK.md")
        print("   → '로그 경로' 섹션이 비어있습니다. 로그 위치를 명시하세요.")
        return 1

    if not runbook_check["rollback"]:
        print("❌ GATE FAIL: docs/ops/RUNBOOK.md")
        print("   → '롤백' 섹션이 비어있습니다. 롤백 방법을 명시하세요.")
        return 1

    print("✅ RUNBOOK 필수 섹션 확인 완료")

    # 6. ADR Status 확인
    print("\n[6/6] ADR-0001 Status 확인...")
    adr_text = (root / "docs/decisions/ADR-0001.md").read_text(encoding="utf-8")

    if not check_adr_status(adr_text):
        print("❌ GATE FAIL: docs/decisions/ADR-0001.md")
        print("   → Status가 'Accepted'가 아닙니다.")
        print("   → **Status**: Accepted 로 변경하세요.")
        return 1

    print("✅ ADR-0001 Status 확인 완료 (Accepted)")

    # 최종 결과
    print("\n" + "=" * 60)
    print("✅ GATE PASS - 모든 검증 통과 (01번 수준)")
    print("=" * 60)
    return 0


if __name__ == "__main__":
    sys.exit(main())
