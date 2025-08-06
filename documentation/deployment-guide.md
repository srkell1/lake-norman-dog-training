# Lake Norman Dog Training Website
## Deployment Guide

This guide provides detailed instructions for deploying your Lake Norman Dog Training website to a permanent hosting provider.

## Table of Contents

1. [Choosing a Web Hosting Provider](#choosing-a-web-hosting-provider)
2. [Domain Registration](#domain-registration)
3. [Setting Up Your Hosting Account](#setting-up-your-hosting-account)
4. [Uploading Your Website Files](#uploading-your-website-files)
5. [Configuring Email for the Contact Form](#configuring-email-for-the-contact-form)
6. [Testing Your Website](#testing-your-website)
7. [Setting Up Google Analytics](#setting-up-google-analytics)
8. [Post-Launch Checklist](#post-launch-checklist)
9. [Troubleshooting Common Issues](#troubleshooting-common-issues)

## Choosing a Web Hosting Provider

For a small business website like Lake Norman Dog Training, we recommend the following hosting providers:

### Recommended Hosting Providers

1. **Bluehost**
   - Great for beginners
   - Excellent WordPress integration (if you decide to switch to WordPress later)
   - Good uptime and reliability
   - 24/7 customer support
   - Pricing: $3.95-$13.95/month

2. **SiteGround**
   - Excellent performance and speed
   - Superior customer support
   - Advanced security features
   - Free SSL certificate
   - Pricing: $6.99-$14.99/month

3. **HostGator**
   - Budget-friendly options
   - Good uptime
   - User-friendly control panel
   - 24/7 customer support
   - Pricing: $2.75-$5.95/month

4. **DreamHost**
   - Good for static HTML sites
   - Strong privacy protection
   - Free domain with annual plans
   - 97-day money-back guarantee
   - Pricing: $2.59-$16.95/month

### What to Look For in a Hosting Provider

- **Reliability**: Look for 99.9% uptime guarantee
- **Customer Support**: 24/7 support via multiple channels
- **Storage Space**: At least 10GB (your site currently uses less than 5MB)
- **Bandwidth**: Unmetered or at least 50GB/month
- **SSL Certificate**: Free SSL certificate included
- **Email Accounts**: At least 5 business email accounts
- **Control Panel**: User-friendly interface like cPanel

## Domain Registration

### Registering Your Domain

1. **Choose Your Domain Registrar**
   - Most hosting providers offer domain registration services
   - You can also use dedicated registrars like Namecheap or GoDaddy

2. **Register Your Domain**
   - Domain name: lakenormandogtraining.com
   - Registration period: 1-5 years (longer periods often get discounts)
   - Consider privacy protection to hide your personal information

3. **Domain Settings**
   - Enable auto-renewal to prevent accidental expiration
   - Secure your domain with two-factor authentication if available

## Setting Up Your Hosting Account

### General Setup Process

1. **Purchase a Hosting Plan**
   - Select a shared hosting plan (sufficient for your website's needs)
   - Choose the data center location closest to your target audience (East Coast USA)
   - Select your billing cycle (annual plans usually offer better value)

2. **Account Creation**
   - Create your hosting account with a strong password
   - Provide accurate contact information for important notifications

3. **Access Your Control Panel**
   - Log in to your hosting control panel (usually cPanel)
   - Familiarize yourself with the interface and available tools

### Specific Setup for Popular Hosts

#### Bluehost Setup

1. Go to [Bluehost.com](https://www.bluehost.com)
2. Click "Get Started" and select "Basic" or "Plus" plan
3. Enter your domain name (lakenormandogtraining.com)
4. Complete the account information and select add-ons
5. Access your cPanel from the Bluehost dashboard

#### SiteGround Setup

1. Go to [SiteGround.com](https://www.siteground.com)
2. Select "Web Hosting" and choose "StartUp" or "GrowBig" plan
3. Enter your domain name
4. Complete the account information and payment details
5. Access Site Tools from your SiteGround dashboard

## Uploading Your Website Files

### Preparing Your Files

1. **Extract the Website Package**
   - Unzip the `lake-norman-dog-training.zip` file to a folder on your computer
   - Ensure all file structures and folders are preserved

2. **Review File Structure**
   - Confirm that `index.html` is in the root directory
   - Check that all subdirectories (css, js, images, pages) are intact

### Upload Methods

#### Method 1: Using FTP (File Transfer Protocol)

1. **Download an FTP Client**
   - [FileZilla](https://filezilla-project.org/) (Windows, Mac, Linux)
   - [Cyberduck](https://cyberduck.io/) (Mac, Windows)

2. **Get FTP Credentials**
   - Obtain FTP credentials from your hosting provider
   - Typically includes: hostname, username, password, port

3. **Connect to Your Server**
   - Open your FTP client
   - Enter your FTP credentials
   - Click "Connect" or "Quick Connect"

4. **Upload Files**
   - Navigate to the `public_html` or `www` directory on the server
   - Drag and drop all website files from your local folder to the server
   - Maintain the same directory structure

5. **Set File Permissions**
   - HTML, CSS, JS files: 644
   - Directories: 755
   - Executable files (like deploy.sh): 755

#### Method 2: Using cPanel File Manager

1. **Access File Manager**
   - Log in to your hosting control panel
   - Find and click on "File Manager"
   - Navigate to the `public_html` directory

2. **Upload Files**
   - Click "Upload" button
   - Select all files from your extracted website folder
   - Upload in batches if needed

3. **Extract Zip (Alternative)**
   - Upload the entire zip file
   - Use the "Extract" function in File Manager
   - Move files to the correct location if needed

## Configuring Email for the Contact Form

### Creating Email Accounts

1. **Access Email Management**
   - Log in to your hosting control panel
   - Find "Email Accounts" or similar option

2. **Create New Email Account**
   - Create info@lakenormandogtraining.com
   - Set a strong password
   - Set mailbox quota (recommended: 2-5GB)

3. **Configure Email Client (Optional)**
   - Set up the email account on your preferred email client
   - Use the email settings provided by your host

### Updating Contact Form

1. **Locate Contact Form Configuration**
   - Open `/js/main.js` in a text editor
   - Find the contact form handler section

2. **Update Email Address**
   - Replace the placeholder email with info@lakenormandogtraining.com
   - Save the file and upload it to your server

3. **Test the Form**
   - Fill out the contact form on your live website
   - Submit a test message
   - Verify that you receive the email

## Testing Your Website

### Comprehensive Testing Checklist

1. **Functionality Testing**
   - Verify all links work correctly
   - Test navigation menu on all pages
   - Ensure contact form submits properly
   - Check that all buttons function as expected

2. **Visual Testing**
   - Check website appearance in different browsers:
     - Google Chrome
     - Mozilla Firefox
     - Safari
     - Microsoft Edge
   - Test on mobile devices (iPhone, Android)
   - Test on tablets

3. **Performance Testing**
   - Check page load times
   - Verify images load correctly
   - Test website speed using [Google PageSpeed Insights](https://pagespeed.web.dev/)

4. **Content Review**
   - Proofread all text for errors
   - Ensure all images display properly
   - Verify contact information is correct
   - Check business hours and service area information

## Setting Up Google Analytics

### Installation Process

1. **Create Google Analytics Account**
   - Go to [Google Analytics](https://analytics.google.com)
   - Sign in with your Google account
   - Click "Start measuring"

2. **Set Up Data Collection**
   - Enter your account name (Lake Norman Dog Training)
   - Set up a property for your website
   - Provide business information

3. **Get Tracking Code**
   - Copy the provided tracking code (starts with `<!-- Global site tag`)

4. **Add Tracking Code to Website**
   - Open each HTML file in a text editor
   - Paste the tracking code just before the closing `</head>` tag
   - Save the files and upload them to your server

### Setting Up Goals

1. **Create Contact Form Submission Goal**
   - In Google Analytics, go to Admin > Goals
   - Click "New Goal"
   - Select "Custom" goal
   - Name: "Contact Form Submission"
   - Type: "Destination"
   - Set the destination page (e.g., /thank-you.html)

2. **Create Phone Call Goal (Optional)**
   - Set up event tracking for phone number clicks
   - Create a goal based on this event

## Post-Launch Checklist

### SEO Verification

1. **Submit Sitemap**
   - Create a Google Search Console account
   - Verify ownership of your website
   - Submit your sitemap.xml file

2. **Check Indexing**
   - Use Google Search Console to ensure pages are being indexed
   - Fix any crawl errors that appear

### Local Business Listings

1. **Google Business Profile**
   - Create or claim your Google Business Profile
   - Add your business information, hours, and photos
   - Follow the optimization guide in your content strategy documents

2. **Local Citations**
   - Create listings on local directories
   - Ensure NAP (Name, Address, Phone) consistency
   - Follow the local citation strategy document

### Social Media Integration

1. **Create Social Media Accounts**
   - Set up business accounts on recommended platforms
   - Add your website URL to all profiles
   - Follow the social media integration plan document

## Troubleshooting Common Issues

### Website Not Loading

1. **Check DNS Propagation**
   - DNS changes can take 24-48 hours to propagate
   - Use [whatsmydns.net](https://www.whatsmydns.net/) to check propagation status

2. **Verify File Permissions**
   - Ensure files have correct permissions
   - HTML/CSS/JS files: 644
   - Directories: 755

3. **Check Error Logs**
   - Access error logs through your hosting control panel
   - Look for specific error messages

### Contact Form Not Working

1. **Check Email Configuration**
   - Verify email address is correct in the form handler
   - Ensure hosting allows PHP mail() function or provides alternatives

2. **Server Configuration**
   - Some hosts require specific mail configurations
   - Contact your hosting provider for assistance

3. **Form Validation**
   - Check browser console for JavaScript errors
   - Verify required fields are properly marked

### Images Not Displaying

1. **Check File Paths**
   - Ensure image paths are correct
   - Paths should be relative to the HTML file

2. **Verify File Uploads**
   - Confirm images were uploaded to the correct directory
   - Check file permissions (should be 644)

3. **Image Formats**
   - Ensure browser supports the image formats
   - Consider converting to more widely supported formats if needed

---

For additional assistance with your website deployment, please refer to your hosting provider's documentation or contact their support team.

This guide was last updated on August 6, 2025.

