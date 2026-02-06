# ELICON Project Upgrade Kit - Makefile
# 명령 통일: check가 곧 게이트

.PHONY: check run test deploy clean help

# 기본 명령
help:
	@echo "ELICON Project Upgrade Kit"
	@echo "=========================="
	@echo ""
	@echo "사용 가능한 명령:"
	@echo "  make check   - Gate 체크 실행 (필수)"
	@echo "  make run     - 개발 서버 실행"
	@echo "  make test    - 린트 및 빌드 테스트"
	@echo "  make deploy  - Vercel 배포"
	@echo "  make clean   - 캐시 정리"

# Gate 체크 (필수)
check:
	@echo "🔍 Gate Check 실행..."
	@python3 scripts/gate_check.py

# 개발 서버 실행
run:
	npm run dev

# 테스트 (린트 + 빌드)
test:
	npm run lint && npm run build

# Vercel 배포
deploy:
	git push origin main

# 캐시 정리
clean:
	@rm -rf .next node_modules/.cache
	@find . -type f -name "*.pyc" -delete
	@find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	@echo "✅ 정리 완료"
