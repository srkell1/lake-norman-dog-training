# Lake Norman Dog Training Website
## Client Handover Guide

Welcome to your new Lake Norman Dog Training website! This guide provides everything you need to know about your website, how to maintain it, and how to make basic updates yourself.

## Table of Contents

1. [Website Overview](#website-overview)
2. [Accessing Your Website](#accessing-your-website)
3. [Making Basic Content Updates](#making-basic-content-updates)
4. [Adding Blog Posts](#adding-blog-posts)
5. [Managing Images](#managing-images)
6. [Contact Form Management](#contact-form-management)
7. [SEO Best Practices](#seo-best-practices)
8. [Implementing Your Content Strategy](#implementing-your-content-strategy)
9. [Technical Support](#technical-support)

## Website Overview

Your new website has been built with the following features:

- **Mobile-Responsive Design**: Looks great on all devices from smartphones to desktop computers
- **Search Engine Optimization**: Built-in SEO features to help you rank well in local searches
- **Fast Loading Speed**: Optimized for performance to provide a great user experience
- **Contact Form**: Allows potential clients to reach you easily
- **Blog Section**: For sharing training tips and building authority
- **Service Pages**: Showcasing your training programs and expertise
- **Testimonials**: Highlighting client success stories
- **Location Information**: Clearly showing your service area around Lake Norman

## Accessing Your Website

### Website Administration

To make changes to your website, you'll need to access the files directly through your hosting provider. We recommend using an FTP client like FileZilla to connect to your server.

Your hosting details:
- **FTP Server**: [Your FTP server address]
- **Username**: [Your FTP username]
- **Password**: [Your FTP password will be provided separately for security]
- **Port**: 21 (standard FTP port)

### Analytics Access

Your website has Google Analytics installed to track visitor behavior. You can access your analytics dashboard at:
- **URL**: [https://analytics.google.com](https://analytics.google.com)
- **Username**: [Your Google Analytics email]
- **Password**: [Your password will be provided separately]

## Making Basic Content Updates

### Editing Existing Pages

To update content on existing pages:

1. Connect to your website using FTP
2. Navigate to the page you want to edit (e.g., `/index.html` for the homepage or `/pages/services.html` for the services page)
3. Download the file to your computer
4. Open the file in a text editor (we recommend [Visual Studio Code](https://code.visualstudio.com/) or [Notepad++](https://notepad-plus-plus.org/))
5. Find the content you want to change
6. Make your edits, being careful not to modify the HTML tags (the parts between < and >)
7. Save the file
8. Upload the modified file back to the server, overwriting the original

**Important**: Always make a backup copy of any file before editing it.

### Updating Business Information

If you need to update your business information (phone number, hours, etc.):

1. Search for the specific information in the relevant HTML files
2. Update all instances of that information across the website
3. Also update the structured data in the `<head>` section of each page

## Adding Blog Posts

To add a new blog post:

1. Create a new HTML file in the `/pages/blog-posts/` directory
2. Use an existing blog post as a template
3. Update the content, title, meta description, and other details
4. Add the blog post to the main blog page (`/pages/blog.html`) by copying an existing blog post entry and updating the details
5. Update your sitemap.xml file to include the new blog post URL

## Managing Images

### Adding New Images

1. Optimize your images before uploading (use a tool like [TinyPNG](https://tinypng.com/))
2. Name your image files descriptively using hyphens between words (e.g., `puppy-training-class.jpg`)
3. Upload the images to the appropriate folder in the `/images/` directory
4. When adding images to your HTML, always include descriptive alt text for accessibility and SEO

### Image Size Guidelines

- **Hero images**: 1920px × 1080px
- **Service thumbnails**: 800px × 600px
- **Team photos**: 400px × 400px
- **Blog featured images**: 1200px × 630px
- **Testimonial photos**: 300px × 300px

## Contact Form Management

Your contact form is set up to send inquiries directly to your email address. The form includes:

- Name field (required)
- Email address (required)
- Phone number (optional)
- Service interest dropdown
- Message field (required)

To change the email address where form submissions are sent:

1. Open `/js/main.js`
2. Find the contact form section
3. Update the email address in the form handler

## SEO Best Practices

To maintain good search engine rankings:

1. **Keep content fresh**: Regularly update your blog with new content
2. **Use keywords naturally**: Include relevant keywords in your content, especially in headings and the first paragraph
3. **Optimize images**: Always add descriptive alt text to images
4. **Local citations**: Maintain consistent NAP (Name, Address, Phone) information across all online directories
5. **Monitor performance**: Check Google Search Console regularly for issues
6. **Build backlinks**: Encourage satisfied clients to link to your website

## Implementing Your Content Strategy

We've created several strategic documents to guide your ongoing marketing efforts:

### Blog Content Calendar

Located at `/content-strategy/blog-content-calendar.md`, this document outlines:
- Blog post topics for the next 6 months
- Target keywords for each post
- Suggested publishing dates
- Content structure recommendations

### Google Business Profile Optimization

The guide at `/content-strategy/google-business-profile-optimization.md` provides:
- Step-by-step instructions for optimizing your Google Business Profile
- Tips for getting more reviews
- Photo guidelines
- Post ideas and scheduling recommendations

### Local Citation Strategy

Found at `/content-strategy/local-citation-strategy.md`, this strategy includes:
- Priority list of directories for business listings
- NAP consistency guidelines
- Citation building schedule
- Monitoring and maintenance tips

### Social Media Integration Plan

The plan at `/content-strategy/social-media-integration-plan.md` covers:
- Platform-specific strategies for Instagram, Facebook, etc.
- Content themes and ideas
- Posting frequency recommendations
- Hashtag strategy
- Engagement guidelines

## Technical Support

If you need assistance with your website beyond basic content updates, please contact:

- **Support Email**: [support email]
- **Support Phone**: [support phone]
- **Hours**: Monday-Friday, 9am-5pm EST

For emergency support (website down, contact form not working, etc.), please call the emergency support line at [emergency support phone].

---

We hope you enjoy your new website! Remember that regular updates and fresh content will help maintain and improve your search engine rankings over time.

This guide was last updated on August 6, 2025.

