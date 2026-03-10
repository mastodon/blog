#!/usr/bin/env bash
# check-internal-links.sh
# Scans markdown files in content/posts/ for non-public links.
# Exits with code 1 if any are found, 0 if clean.
#
# Usage:
#   ./scripts/check-internal-links.sh              # scans all posts
#   ./scripts/check-internal-links.sh file.md ...  # scans specific files

set -euo pipefail

INTERNAL_PATTERNS=(
    'notion\.so'
    'linear\.app'
    'figma\.com/file'
)

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ $# -gt 0 ]]; then
    files=("$@")
else
    mapfile -t files < <(find "$REPO_ROOT/content/posts" -name "*.md" -type f)
fi

found=0

for file in "${files[@]}"; do
    for pattern in "${INTERNAL_PATTERNS[@]}"; do
        matches=$(grep -En "$pattern" "$file" 2>/dev/null || true)
        if [[ -n "$matches" ]]; then
            echo "ERROR: internal pattern '$pattern' found in ${file}:"
            while IFS= read -r line; do
                echo "  $line"
            done <<< "$matches"
            found=1
        fi
    done
done

if [[ $found -eq 1 ]]; then
    echo ""
    echo "The above links are internal-only and must not be published."
    echo "Please remove or replace them before committing."
    exit 1
fi

echo "OK: no internal-only links found."
exit 0
