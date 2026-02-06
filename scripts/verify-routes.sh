#!/bin/bash

echo "======================================"
echo "Elicon Homepage - Route Verification"
echo "======================================"
echo ""

BASE_URL="http://localhost:3000"

check_route() {
  local route=$1
  local description=$2

  echo -n "Testing $description ($route)... "

  status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$route")

  if [ "$status" = "200" ]; then
    echo "OK (200)"
    return 0
  else
    echo "FAIL ($status)"
    return 1
  fi
}

echo "Static Pages:"
echo "-------------"
check_route "/" "Main Page"
check_route "/about" "About Us"
check_route "/brands" "Brands List"
check_route "/brands/wing" "Wing Brand Page"
check_route "/brands/cocolic" "Cocolic Brand Page"
check_route "/brands/seanex" "Seanex Brand Page"
check_route "/partnership" "Partnership Page"

echo ""
echo "API Endpoints:"
echo "-------------"
echo -n "Testing /api/instagram... "
status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/api/instagram?username=elicon_official&limit=6")
if [ "$status" = "200" ]; then
  echo "OK (200)"
else
  echo "FAIL ($status)"
fi

echo ""
echo "External Links Verification:"
echo "----------------------------"
echo "B2C Shop: https://eliconstore.com"
echo "Blog: https://blog.elicon.co.kr"

echo ""
echo "======================================"
echo "Verification Complete"
echo "======================================"
