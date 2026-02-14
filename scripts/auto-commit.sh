#!/bin/bash

# Auto-commit script for portfolio-bismin
# This script automatically stages and commits all changes

cd "$(dirname "$0")/.."

# Check if there are any changes
if [ -n "$(git status -s)" ]; then
    echo "📝 Found changes, auto-committing..."
    
    # Stage all changes
    git add .
    
    # Create commit with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    git commit -m "Auto-update: $TIMESTAMP

- Updated portfolio website
- All changes automatically committed and synced"
    
    # Push to GitHub
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "✅ Changes pushed successfully!"
    echo "📌 Vercel will automatically deploy the changes"
else
    echo "✅ No changes to commit"
fi
