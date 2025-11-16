#!/bin/bash

echo "Testing /api/contact endpoint..."
echo ""

echo "Test 1: Valid request with all fields"
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "테스트 사용자",
    "contactNumber": "010-1234-5678",
    "companyName": "테스트 회사",
    "email": "test@example.com",
    "inquiryType": "distribution",
    "message": "파트너십 문의드립니다"
  }'
echo ""
echo ""

echo "Test 2: Minimal request (name + contactNumber only)"
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "홍길동",
    "contactNumber": "01012345678"
  }'
echo ""
echo ""

echo "Test 3: Invalid request (missing required fields)"
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com"
  }'
echo ""
