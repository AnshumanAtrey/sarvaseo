#!/bin/bash

# Google Search Documentation Link Checker
# This script tests all links from the google-search-doc.md file

echo "🔍 Google Search Documentation Link Checker"
echo "============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
total_links=0
working_links=0
broken_links=0
external_links=0

# Create results file
results_file="link-test-results.txt"
echo "Link Test Results - $(date)" > "$results_file"
echo "=================================" >> "$results_file"
echo "" >> "$results_file"

# Function to test a URL
test_url() {
    local url="$1"
    local title="$2"
    
    total_links=$((total_links + 1))
    
    # Check if it's an external link
    if [[ "$url" == *"support.google.com"* ]] || [[ "$url" == *"status.search.google.com"* ]]; then
        external_links=$((external_links + 1))
        echo -e "${YELLOW}[EXTERNAL]${NC} Testing: $title"
        echo "[EXTERNAL] $title - $url" >> "$results_file"
    else
        echo -e "${BLUE}[TESTING]${NC} $title"
    fi
    
    # Test the URL with curl
    response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [[ "$response" == "200" ]] || [[ "$response" == "301" ]] || [[ "$response" == "302" ]]; then
        working_links=$((working_links + 1))
        echo -e "${GREEN}[✓ WORKING]${NC} $url (HTTP $response)"
        echo "[✓ WORKING] $title - $url (HTTP $response)" >> "$results_file"
    else
        broken_links=$((broken_links + 1))
        echo -e "${RED}[✗ BROKEN]${NC} $url (HTTP $response)"
        echo "[✗ BROKEN] $title - $url (HTTP $response)" >> "$results_file"
    fi
    
    echo "" >> "$results_file"
    
    # Small delay to avoid overwhelming the server
    sleep 0.5
}

echo "Starting link validation..."
echo ""

# Extract URLs using grep and sed
grep -o '\[.*\](https://[^)]*)' "src/data/google-search-doc.md" | while read -r match; do
    # Extract title and URL
    title=$(echo "$match" | sed 's/\[\(.*\)\](https:\/\/.*)/\1/')
    url=$(echo "$match" | sed 's/\[.*\](\(https:\/\/[^)]*\))/\1/')
    
    # Clean the title
    clean_title=$(echo "$title" | sed 's/ (External)//g' | sed 's/ (Beta)//g' | sed 's/ (Deprecated)//g' | sed 's/ (Limited Access)//g')
    
    test_url "$url" "$clean_title"
done

# Since we're using a pipe, we need to get the counters differently
# Let's count from the results file
total_links=$(grep -c "\[" "$results_file" 2>/dev/null || echo "0")
working_links=$(grep -c "\[✓ WORKING\]" "$results_file" 2>/dev/null || echo "0")
broken_links=$(grep -c "\[✗ BROKEN\]" "$results_file" 2>/dev/null || echo "0")
external_links=$(grep -c "\[EXTERNAL\]" "$results_file" 2>/dev/null || echo "0")

# Summary
echo ""
echo "============================================="
echo -e "${BLUE}📊 SUMMARY${NC}"
echo "============================================="
echo -e "Total links tested: ${BLUE}$total_links${NC}"
echo -e "Working links: ${GREEN}$working_links${NC}"
echo -e "Broken links: ${RED}$broken_links${NC}"
echo -e "External links: ${YELLOW}$external_links${NC}"
echo ""

# Calculate success rate
if [ $total_links -gt 0 ]; then
    success_rate=$(( (working_links * 100) / total_links ))
    echo -e "Success rate: ${GREEN}$success_rate%${NC}"
else
    echo "No links found to test"
fi

# Add summary to results file
echo "" >> "$results_file"
echo "SUMMARY" >> "$results_file"
echo "=======" >> "$results_file"
echo "Total links tested: $total_links" >> "$results_file"
echo "Working links: $working_links" >> "$results_file"
echo "Broken links: $broken_links" >> "$results_file"
echo "External links: $external_links" >> "$results_file"
if [ $total_links -gt 0 ]; then
    success_rate=$(( (working_links * 100) / total_links ))
    echo "Success rate: $success_rate%" >> "$results_file"
fi

echo ""
echo -e "${BLUE}📄 Results saved to: $results_file${NC}"

# Show broken links if any
if [ $broken_links -gt 0 ]; then
    echo ""
    echo -e "${RED}⚠️  BROKEN LINKS FOUND:${NC}"
    echo "Check $results_file for details"
fi

echo ""
echo "Link validation complete! 🎉"