# Setting Up Netlify CMS for Lake Norman Dog Training Website

This guide will walk you through adding Netlify CMS to your Lake Norman Dog Training website, allowing you to make content updates through a user-friendly interface without touching code.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Add Netlify CMS Files](#step-1-add-netlify-cms-files)
4. [Step 2: Configure Authentication](#step-2-configure-authentication)
5. [Step 3: Define Content Models](#step-3-define-content-models)
6. [Step 4: Access and Use the CMS](#step-4-access-and-use-the-cms)
7. [Common Tasks](#common-tasks)
8. [Troubleshooting](#troubleshooting)

## Overview

Netlify CMS is an open-source content management system that works with static sites hosted on any platform. It provides a user-friendly interface for editing content without touching code, while storing all changes in your GitHub repository.

**Benefits:**
- Edit content through a visual interface
- No coding required for content updates
- Changes are automatically deployed through your Vercel setup
- Maintains version control through Git
- Free and open-source

## Prerequisites

Before setting up Netlify CMS, you should have:
- Your website deployed using GitHub and Vercel
- Admin access to the GitHub repository
- Your domain connected to Vercel

## Step 1: Add Netlify CMS Files

First, you need to add the necessary files to your repository:

### 1. Create Admin Directory

Create a directory called `admin` in the root of your website:

```
lake-norman-dog-training/
├── admin/
├── css/
├── images/
├── js/
├── pages/
└── index.html
```

### 2. Create Admin Index File

Create a file called `index.html` in the admin directory with the following content:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager | Lake Norman Dog Training</title>
  <!-- Include the Netlify CMS script -->
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <!-- Include the Netlify CMS script -->
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

### 3. Create Config File

Create a file called `config.yml` in the admin directory with the following content:

```yaml
backend:
  name: github
  repo: yourusername/lake-norman-dog-training
  branch: main # Branch to update

media_folder: "images/uploads" # Media files will be stored in the repo under images/uploads
public_folder: "/images/uploads" # The src attribute for uploaded media

collections:
  - name: "services"
    label: "Services"
    folder: "pages/services"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Featured Image", name: "thumbnail", widget: "image"}
      - {label: "Price", name: "price", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}

  - name: "testimonials"
    label: "Testimonials"
    folder: "pages/testimonials"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Client Name", name: "name", widget: "string"}
      - {label: "Date", name: "date", widget: "datetime"}
      - {label: "Rating", name: "rating", widget: "number", min: 1, max: 5}
      - {label: "Testimonial", name: "testimonial", widget: "text"}
      - {label: "Client Location", name: "location", widget: "string"}

  - name: "blog"
    label: "Blog Posts"
    folder: "pages/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "thumbnail", widget: "image"}
      - {label: "Summary", name: "summary", widget: "text"}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Tags", name: "tags", widget: "list"}

  - name: "pages"
    label: "Pages"
    files:
      - file: "index.html"
        label: "Home Page"
        name: "home"
        fields:
          - {label: "Hero Title", name: "hero_title", widget: "string"}
          - {label: "Hero Subtitle", name: "hero_subtitle", widget: "string"}
          - {label: "About Section Title", name: "about_title", widget: "string"}
          - {label: "About Section Content", name: "about_content", widget: "markdown"}
          - {label: "Services Section Title", name: "services_title", widget: "string"}
          - {label: "Services Section Content", name: "services_content", widget: "markdown"}
      
      - file: "pages/about.html"
        label: "About Page"
        name: "about"
        fields:
          - {label: "Title", name: "title", widget: "string"}
          - {label: "Team Section Title", name: "team_title", widget: "string"}
          - {label: "Team Section Content", name: "team_content", widget: "markdown"}
          - {label: "Mission Statement", name: "mission", widget: "text"}
```

### 4. Add Identity Widget to Main Site

Add the following script to the `<head>` section of your main website's layout or index.html file:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

Add the following script just before the closing `</body>` tag:

```html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

## Step 2: Configure Authentication

To allow secure access to your CMS, you'll need to set up authentication:

### Option 1: Using Netlify Identity (Recommended)

1. **Sign up for Netlify** (even if you're using Vercel for hosting)
   - Go to [netlify.com](https://www.netlify.com/) and sign up
   - Create a new site from your GitHub repository
   - You don't need to use Netlify for hosting, just for authentication

2. **Enable Netlify Identity**
   - Go to your site settings in Netlify
   - Click on "Identity" in the navigation
   - Click "Enable Identity"
   - Under Registration preferences, select "Invite only"
   - Under External providers, you can enable GitHub login if desired

3. **Invite Yourself as a User**
   - Go to the Identity tab
   - Click "Invite users"
   - Enter your email address
   - Accept the invitation in your email

### Option 2: Using GitHub OAuth

1. **Register a new OAuth application in GitHub**
   - Go to your GitHub account settings
   - Select "Developer settings" > "OAuth Apps" > "New OAuth App"
   - Fill in the details:
     - Application name: "Lake Norman Dog Training CMS"
     - Homepage URL: Your website URL
     - Authorization callback URL: Your website URL + `/admin/`

2. **Update your config.yml**
   - Replace the backend section with:

```yaml
backend:
  name: github
  repo: yourusername/lake-norman-dog-training
  branch: main
  auth_endpoint: auth
  base_url: https://your-auth-server.com
```

3. **Set up an authentication server**
   - This is more complex and requires a separate server
   - Consider using Netlify Identity instead for simplicity

## Step 3: Define Content Models

The `config.yml` file already includes basic content models for:
- Services
- Testimonials
- Blog posts
- Key pages (Home, About)

You can customize these models based on your specific needs:

### Example: Adding a FAQ Section

Add this to your `config.yml` under collections:

```yaml
- name: "faqs"
  label: "FAQs"
  folder: "pages/faqs"
  create: true
  fields:
    - {label: "Question", name: "question", widget: "string"}
    - {label: "Answer", name: "answer", widget: "markdown"}
    - {label: "Category", name: "category", widget: "select", options: ["Training", "Behavior", "Pricing", "General"]}
    - {label: "Order", name: "order", widget: "number"}
```

## Step 4: Access and Use the CMS

Once everything is set up:

1. **Push all changes to GitHub**
   - Vercel will deploy the updated site with the CMS

2. **Access the CMS**
   - Go to your website URL + `/admin/`
   - Example: `https://lakenormandogtraining.com/admin/`
   - Log in using the authentication method you set up

3. **Start editing content**
   - The left sidebar shows all content types
   - Select a content type to view or edit existing entries
   - Click "New [Content Type]" to create new content

## Common Tasks

### Updating Service Information

1. Go to your CMS at `yourdomain.com/admin/`
2. Click on "Services" in the sidebar
3. Select the service you want to update
4. Edit the fields (title, description, price, etc.)
5. Click "Publish" to save changes

### Adding a New Blog Post

1. Go to your CMS at `yourdomain.com/admin/`
2. Click on "Blog Posts" in the sidebar
3. Click "New Blog Post"
4. Fill in all required fields
5. Click "Publish" to create the post

### Updating Homepage Content

1. Go to your CMS at `yourdomain.com/admin/`
2. Click on "Pages" in the sidebar
3. Select "Home Page"
4. Edit the content as needed
5. Click "Publish" to save changes

## Troubleshooting

### CMS Not Loading

- Check that all files are in the correct locations
- Verify that the GitHub repository name and branch are correct in `config.yml`
- Check browser console for JavaScript errors

### Authentication Issues

- Ensure Netlify Identity is properly set up
- Check that you've accepted the invitation email
- Verify that the GitHub repository permissions are correct

### Content Not Updating

- Check that Vercel is deploying when changes are pushed to GitHub
- Verify that the content model in `config.yml` matches your site structure
- Check for build errors in the Vercel dashboard

---

This guide was created on August 6, 2025. For the most up-to-date information, refer to the [official Netlify CMS documentation](https://www.netlifycms.org/docs/intro/).

