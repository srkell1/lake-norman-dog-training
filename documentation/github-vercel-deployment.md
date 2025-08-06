# Deploying Lake Norman Dog Training Website with GitHub and Vercel

This guide provides step-by-step instructions for deploying your Lake Norman Dog Training website using GitHub for version control and Vercel for hosting and deployment.

## Table of Contents

1. [Overview](#overview)
2. [Setting Up GitHub](#setting-up-github)
3. [Setting Up Vercel](#setting-up-vercel)
4. [Connecting Your Domain](#connecting-your-domain)
5. [Making Website Updates](#making-website-updates)
6. [Advanced Configuration](#advanced-configuration)
7. [Troubleshooting](#troubleshooting)

## Overview

The GitHub + Vercel deployment workflow offers several advantages:

- **Version control**: Track all changes to your website
- **Continuous deployment**: Automatically deploy when you update files
- **Global CDN**: Fast loading times worldwide
- **SSL certificates**: Automatic HTTPS setup
- **Preview deployments**: Test changes before they go live
- **Rollbacks**: Easily revert to previous versions if needed

## Setting Up GitHub

### 1. Create a GitHub Account

1. Go to [GitHub.com](https://github.com)
2. Click "Sign up" and follow the registration process
3. Choose the free plan (sufficient for your needs)
4. Verify your email address

### 2. Create a New Repository

1. Click the "+" icon in the top-right corner
2. Select "New repository"
3. Name your repository (e.g., "lake-norman-dog-training")
4. Add a description (optional)
5. Choose "Public" or "Private" (either works with Vercel)
6. Check "Add a README file"
7. Click "Create repository"

### 3. Upload Your Website Files

#### Option 1: Using GitHub Web Interface (Easiest)

1. Navigate to your new repository
2. Click "Add file" > "Upload files"
3. Drag and drop your website files or use the file selector
4. Maintain the same directory structure as in your zip file
5. Add a commit message (e.g., "Initial website upload")
6. Click "Commit changes"

#### Option 2: Using Git Command Line (More Technical)

1. Install Git on your computer
2. Open a terminal or command prompt
3. Navigate to your website directory
4. Initialize Git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/yourusername/lake-norman-dog-training.git
git push -u origin main
```

## Setting Up Vercel

### 1. Create a Vercel Account

1. Go to [Vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended for seamless integration)
4. Authorize Vercel to access your GitHub account

### 2. Import Your GitHub Repository

1. In your Vercel dashboard, click "Add New..." > "Project"
2. Select your "lake-norman-dog-training" repository from the list
3. Configure your project:
   - Framework Preset: Select "Other" (static HTML)
   - Root Directory: Leave as default (/)
   - Build Command: Leave blank (not needed for static HTML)
   - Output Directory: Leave blank (default is the root directory)
4. Click "Deploy"

### 3. Wait for Deployment

1. Vercel will build and deploy your website
2. Once complete, you'll see "Congratulations! Your project has been successfully deployed"
3. Click the deployment URL to view your website

## Connecting Your Domain

### 1. Add Your Domain in Vercel

1. Go to your project in the Vercel dashboard
2. Click "Settings" > "Domains"
3. Enter your domain (lakenormandogtraining.com)
4. Click "Add"

### 2. Configure DNS Settings

#### Option 1: Using Vercel as Your DNS Provider (Recommended)

1. In the domains section, click "Nameservers"
2. Note the Vercel nameservers provided
3. Go to your domain registrar (where you purchased your domain)
4. Update the nameservers to the ones provided by Vercel
5. Wait for DNS propagation (can take up to 48 hours)

#### Option 2: Using External DNS Provider

1. In the domains section, note the verification records
2. Go to your DNS provider
3. Add the verification records as shown in Vercel
4. Add a CNAME record pointing to cname.vercel-dns.com
5. Wait for DNS propagation (can take up to 48 hours)

### 3. Verify Domain Connection

1. Once DNS propagation is complete, your domain will show as "Valid" in Vercel
2. Vercel automatically configures SSL certificates for your domain
3. Your website will be accessible at https://lakenormandogtraining.com

## Making Website Updates

### 1. Small Updates via GitHub Web Interface

1. Navigate to your repository on GitHub
2. Find the file you want to edit
3. Click the pencil icon to edit
4. Make your changes
5. Add a commit message describing the changes
6. Click "Commit changes"
7. Vercel will automatically detect the change and deploy an update

### 2. Larger Updates via Local Development

1. Clone the repository to your computer:
```bash
git clone https://github.com/yourusername/lake-norman-dog-training.git
```
2. Make changes to the files using your preferred editor
3. Commit and push the changes:
```bash
git add .
git commit -m "Description of changes"
git push
```
4. Vercel will automatically deploy the updates

### 3. Preview Deployments

When you create a pull request on GitHub, Vercel automatically creates a preview deployment with your changes. This allows you to test changes before merging them to the main branch.

1. Create a new branch for your changes:
```bash
git checkout -b feature-name
```
2. Make your changes, commit, and push to the new branch
3. Create a pull request on GitHub
4. Vercel will create a preview deployment
5. Review the preview, then merge the pull request when ready

## Advanced Configuration

### 1. Environment Variables

If you need to store sensitive information (like API keys):

1. Go to your project in Vercel
2. Click "Settings" > "Environment Variables"
3. Add key-value pairs as needed
4. Choose which environments they apply to (Production, Preview, Development)

### 2. Custom Build Settings

For more complex websites or if you add frameworks later:

1. Create a `vercel.json` file in your repository root:
```json
{
  "buildCommand": "your-build-command",
  "outputDirectory": "your-output-directory",
  "framework": "custom"
}
```

### 3. Form Handling

For the contact form, you have several options:

1. **Vercel Serverless Functions**:
   - Create an `api` folder in your repository
   - Add a serverless function to handle form submissions

2. **Third-party Form Services**:
   - [Formspree](https://formspree.io) (recommended for simplicity)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [FormSubmit](https://formsubmit.co)

Example Formspree integration for your contact form:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <!-- Your form fields -->
</form>
```

## Troubleshooting

### 1. Deployment Failures

If your deployment fails:

1. Check the Vercel deployment logs
2. Common issues include:
   - Missing files or incorrect file structure
   - Invalid HTML or CSS
   - JavaScript errors

### 2. Domain Connection Issues

If your domain isn't connecting:

1. Verify DNS settings are correct
2. Check for typos in domain names
3. Allow sufficient time for DNS propagation (up to 48 hours)
4. Ensure your domain registration is active and not expired

### 3. Website Not Updating

If changes aren't appearing after updates:

1. Check if the deployment completed successfully in Vercel
2. Try clearing your browser cache
3. Verify you pushed changes to the correct branch (main)

## Additional Resources

- [GitHub Documentation](https://docs.github.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

This guide was created on August 6, 2025. For the most up-to-date information, refer to the official GitHub and Vercel documentation.

