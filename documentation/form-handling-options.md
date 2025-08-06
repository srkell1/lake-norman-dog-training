# Contact Form Handling Options for Lake Norman Dog Training Website

This guide explains different options for handling form submissions from your contact form when using GitHub + Vercel deployment.

## Table of Contents

1. [Overview](#overview)
2. [Option 1: Formspree (Recommended)](#option-1-formspree-recommended)
3. [Option 2: Vercel Serverless Functions](#option-2-vercel-serverless-functions)
4. [Option 3: EmailJS](#option-3-emailjs)
5. [Option 4: Google Forms](#option-4-google-forms)
6. [Comparison Table](#comparison-table)

## Overview

Since GitHub Pages and Vercel static hosting don't process server-side code (like PHP), you'll need a different solution to handle form submissions. Here are the best options for your contact form:

## Option 1: Formspree (Recommended)

[Formspree](https://formspree.io) is a form backend service that allows you to receive form submissions directly to your email without any server-side code.

### Setup Process:

1. **Create a Formspree Account**
   - Go to [formspree.io](https://formspree.io)
   - Sign up for a free account (allows 50 submissions per month)

2. **Create a Form**
   - Click "New Form"
   - Name your form (e.g., "Lake Norman Dog Training Contact")
   - Choose your email to receive submissions

3. **Update Your HTML Form**
   - Replace your current form action with the Formspree endpoint:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
    <label for="name">Your Name *</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email Address *</label>
    <input type="email" id="email" name="email" required>
    
    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone">
    
    <label for="service">Service Interest</label>
    <select id="service" name="service">
        <option value="">-- Select a Service --</option>
        <option value="Basic Obedience">Basic Obedience Training</option>
        <option value="Puppy Training">Puppy Training</option>
        <option value="Behavior Modification">Behavior Modification</option>
        <option value="Private Training">Private Training</option>
        <option value="Group Classes">Group Classes</option>
        <option value="Service Dog">Service Dog Preparation</option>
        <option value="Other">Other (Please specify)</option>
    </select>
    
    <label for="message">Your Message *</label>
    <textarea id="message" name="message" required></textarea>
    
    <button type="submit">Send Message</button>
</form>
```

4. **Customize Form Settings (Optional)**
   - Set up custom subject lines
   - Enable reCAPTCHA to prevent spam
   - Create custom thank you pages
   - Set up email templates

### Pros:
- Easy setup (5 minutes)
- No coding required
- Free tier available
- Spam protection
- Custom redirects after submission

### Cons:
- Limited to 50 submissions/month on free plan
- Paid plan starts at $10/month for more submissions

## Option 2: Vercel Serverless Functions

You can create a serverless function on Vercel to handle form submissions.

### Setup Process:

1. **Create an API Directory**
   - In your project, create an `/api` directory

2. **Create a Form Handler Function**
   - Create a file named `/api/contact.js` with the following code:

```javascript
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get form data
    const { name, email, phone, service, message } = req.body;
    
    // Validate form data
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Required fields missing' });
    }
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'your-smtp-host',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-password',
      },
    });
    
    // Send email
    await transporter.sendMail({
      from: 'website@lakenormandogtraining.com',
      to: 'info@lakenormandogtraining.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service Interest: ${service || 'Not specified'}
        
        Message:
        ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    // Return success
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
```

3. **Install Dependencies**
   - Create a `package.json` file in your project root if it doesn't exist
   - Install nodemailer: `npm install nodemailer`

4. **Update Your HTML Form**
   - Update your form to submit to your API endpoint:

```html
<form id="contactForm">
    <!-- Form fields remain the same -->
    <button type="submit">Send Message</button>
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('contactForm').reset();
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    }
});
</script>
```

5. **Set Environment Variables in Vercel**
   - Go to your project settings in Vercel
   - Add environment variables for your email credentials

### Pros:
- Complete control over functionality
- No submission limits
- No third-party dependencies
- Can include custom logic

### Cons:
- More complex setup
- Requires basic JavaScript knowledge
- Need to manage email credentials securely

## Option 3: EmailJS

[EmailJS](https://www.emailjs.com/) allows you to send emails directly from client-side JavaScript without a server.

### Setup Process:

1. **Create an EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account (allows 200 emails/month)

2. **Add an Email Service**
   - Connect your email provider (Gmail, Outlook, etc.)
   - Create an email template for form submissions

3. **Add EmailJS to Your Website**
   - Add the EmailJS SDK to your HTML:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
    (function() {
        emailjs.init("YOUR_USER_ID");
    })();
</script>
```

4. **Update Your Form**
   - Add JavaScript to handle form submission:

```html
<form id="contactForm">
    <!-- Form fields remain the same -->
    <button type="submit">Send Message</button>
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
});
</script>
```

### Pros:
- Simple setup
- No server-side code needed
- Free tier available (200 emails/month)
- Templates for email formatting

### Cons:
- API keys exposed in client-side code
- Limited to 200 emails/month on free plan
- Paid plan starts at $14.95/month

## Option 4: Google Forms

You can use Google Forms as a backend for your contact form.

### Setup Process:

1. **Create a Google Form**
   - Go to [forms.google.com](https://forms.google.com/)
   - Create a new form with fields matching your contact form
   - Set up email notifications for new submissions

2. **Get the Form URL**
   - Click "Send" and copy the form URL

3. **Update Your HTML Form**
   - Set your form action to the Google Form URL:

```html
<form action="YOUR_GOOGLE_FORM_URL" method="POST" target="_blank">
    <!-- Map your form fields to Google Form fields -->
    <input type="text" name="entry.123456789" placeholder="Name" required>
    <input type="email" name="entry.234567890" placeholder="Email" required>
    <!-- Add other fields with corresponding entry IDs -->
    <button type="submit">Send Message</button>
</form>
```

4. **Create a Thank You Page**
   - Create a thank-you.html page in your website
   - Use JavaScript to redirect from Google Forms to your thank you page

### Pros:
- Completely free
- No submission limits
- Reliable Google infrastructure
- Submissions stored in Google Sheets

### Cons:
- More complex setup to match your form styling
- Users might briefly see the Google Forms page
- Less control over the submission process

## Comparison Table

| Feature | Formspree | Vercel Functions | EmailJS | Google Forms |
|---------|-----------|------------------|---------|--------------|
| **Ease of Setup** | ★★★★★ | ★★★ | ★★★★ | ★★★ |
| **Free Tier** | 50/month | Unlimited | 200/month | Unlimited |
| **Custom Styling** | ★★★★★ | ★★★★★ | ★★★★★ | ★★★ |
| **Spam Protection** | ★★★★ | ★★★ | ★★★ | ★★★★ |
| **Data Privacy** | ★★★★ | ★★★★★ | ★★★ | ★★★ |
| **Technical Complexity** | Low | High | Medium | Medium |
| **Maintenance Required** | Low | Medium | Low | Low |

## Recommendation

For your Lake Norman Dog Training website, **Formspree** is the recommended option because:

1. It's the easiest to implement (5-minute setup)
2. Provides professional form handling
3. Includes spam protection
4. Maintains your website's design and user experience
5. The free tier (50 submissions/month) is likely sufficient for your needs

If you expect more than 50 form submissions per month, consider:
- Upgrading to Formspree Pro ($10/month)
- Implementing the Vercel Serverless Function approach for unlimited submissions

---

This guide was created on August 6, 2025. For the most up-to-date information, refer to the official documentation for each service.

