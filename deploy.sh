#!/bin/bash
# Deployment script for Lake Norman Dog Training website

# Configuration
FTP_HOST="ftp.lakenormandogtraining.com"
FTP_USER="your_username"
FTP_PASS="your_password"
REMOTE_DIR="/public_html"
LOCAL_DIR="."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to display messages
function echo_message() {
  echo -e "${2}${1}${NC}"
}

# Check if lftp is installed
if ! command -v lftp &> /dev/null; then
  echo_message "lftp is not installed. Please install it first." "$RED"
  echo_message "On Ubuntu/Debian: sudo apt-get install lftp" "$YELLOW"
  echo_message "On CentOS/RHEL: sudo yum install lftp" "$YELLOW"
  echo_message "On macOS with Homebrew: brew install lftp" "$YELLOW"
  exit 1
fi

# Start deployment
echo_message "Starting deployment of Lake Norman Dog Training website..." "$GREEN"
echo_message "Preparing files for deployment..." "$YELLOW"

# Minify CSS (requires minify tool)
if command -v minify &> /dev/null; then
  echo_message "Minifying CSS files..." "$YELLOW"
  minify -o css/styles.min.css css/styles.css
  # Update HTML files to use minified CSS
  find . -name "*.html" -exec sed -i 's/styles.css/styles.min.css/g' {} \;
else
  echo_message "minify tool not found. Skipping CSS minification." "$YELLOW"
  echo_message "To install: npm install -g minify" "$YELLOW"
fi

# Minify JavaScript (requires minify tool)
if command -v minify &> /dev/null; then
  echo_message "Minifying JavaScript files..." "$YELLOW"
  minify -o js/main.min.js js/main.js
  # Update HTML files to use minified JS
  find . -name "*.html" -exec sed -i 's/main.js/main.min.js/g' {} \;
else
  echo_message "minify tool not found. Skipping JavaScript minification." "$YELLOW"
fi

# Optimize images (requires imagemin-cli)
if command -v imagemin &> /dev/null; then
  echo_message "Optimizing images..." "$YELLOW"
  imagemin images/* --out-dir=images/optimized
  # Move optimized images to replace originals
  mv images/optimized/* images/
  rmdir images/optimized
else
  echo_message "imagemin-cli not found. Skipping image optimization." "$YELLOW"
  echo_message "To install: npm install -g imagemin-cli" "$YELLOW"
fi

# Create a backup
echo_message "Creating backup..." "$YELLOW"
BACKUP_FILE="backup_$(date +%Y%m%d_%H%M%S).zip"
zip -r "$BACKUP_FILE" . -x "*.git*" "*.DS_Store" "node_modules/*" "$BACKUP_FILE"
echo_message "Backup created: $BACKUP_FILE" "$GREEN"

# Upload to server
echo_message "Uploading files to server..." "$YELLOW"
lftp -c "
open $FTP_HOST
user $FTP_USER $FTP_PASS
lcd $LOCAL_DIR
cd $REMOTE_DIR
mirror --reverse --delete --verbose
bye
"

# Check if upload was successful
if [ $? -eq 0 ]; then
  echo_message "Deployment completed successfully!" "$GREEN"
  echo_message "Website is now live at https://www.lakenormandogtraining.com" "$GREEN"
else
  echo_message "Deployment failed. Please check your FTP credentials and try again." "$RED"
  exit 1
fi

# Revert HTML files to use non-minified versions for development
if command -v minify &> /dev/null; then
  echo_message "Reverting HTML files to use non-minified versions for development..." "$YELLOW"
  find . -name "*.html" -exec sed -i 's/styles.min.css/styles.css/g' {} \;
  find . -name "*.html" -exec sed -i 's/main.min.js/main.js/g' {} \;
fi

echo_message "Don't forget to:" "$YELLOW"
echo_message "1. Verify the website is working correctly" "$YELLOW"
echo_message "2. Submit the sitemap to Google Search Console" "$YELLOW"
echo_message "3. Check for any broken links or issues" "$YELLOW"

exit 0

