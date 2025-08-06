/**
 * Lake Norman Dog Training Website JavaScript
 * Handles interactive features like mobile menu, testimonial slider, etc.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Testimonial Slider
    initTestimonialSlider();
    
    // Smooth Scrolling for Anchor Links
    initSmoothScrolling();
});

/**
 * Initialize Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = mainNav.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.main-nav') && !event.target.closest('.mobile-menu-toggle')) {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
}

/**
 * Initialize Testimonial Slider
 */
function initTestimonialSlider() {
    // Sample testimonials data - in a real site, this would come from a database or CMS
    const testimonials = [
        {
            content: "Lake Norman Dog Training transformed our energetic Lab puppy into a well-behaved family companion. The trainers were patient, knowledgeable, and truly cared about our dog's progress.",
            author: "Sarah Johnson",
            location: "Mooresville, NC"
        },
        {
            content: "After trying several other trainers with no success, Lake Norman Dog Training helped our reactive German Shepherd overcome his fear of other dogs. We can finally enjoy walks without stress!",
            author: "Michael Rodriguez",
            location: "Cornelius, NC"
        },
        {
            content: "The boat training program was exactly what we needed for our Golden Retriever. Now she's comfortable and safe on our weekend lake trips. Worth every penny!",
            author: "Jennifer Williams",
            location: "Davidson, NC"
        }
    ];
    
    let currentTestimonialIndex = 0;
    const testimonialContent = document.querySelector('.testimonial-content p');
    const authorName = document.querySelector('.author-info h4');
    const authorLocation = document.querySelector('.author-info p');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Only initialize if testimonial elements exist
    if (testimonialContent && authorName && authorLocation && prevBtn && nextBtn) {
        // Update testimonial content
        function updateTestimonial() {
            const currentTestimonial = testimonials[currentTestimonialIndex];
            
            // Fade out
            testimonialContent.style.opacity = 0;
            authorName.style.opacity = 0;
            authorLocation.style.opacity = 0;
            
            // Update content after fade out
            setTimeout(() => {
                testimonialContent.textContent = currentTestimonial.content;
                authorName.textContent = currentTestimonial.author;
                authorLocation.textContent = currentTestimonial.location;
                
                // Fade in
                testimonialContent.style.opacity = 1;
                authorName.style.opacity = 1;
                authorLocation.style.opacity = 1;
            }, 300);
        }
        
        // Add transition styles
        testimonialContent.style.transition = 'opacity 0.3s ease';
        authorName.style.transition = 'opacity 0.3s ease';
        authorLocation.style.transition = 'opacity 0.3s ease';
        
        // Previous button click
        prevBtn.addEventListener('click', function() {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
        });
        
        // Next button click
        nextBtn.addEventListener('click', function() {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonial();
        });
        
        // Auto-rotate testimonials every 8 seconds
        setInterval(function() {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonial();
        }, 8000);
    }
}

/**
 * Initialize Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Handle Form Submission
 * In a real implementation, this would send data to a server
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    
    // Validate form (simple example)
    let isValid = true;
    let errorMessage = '';
    
    if (!formObject.name || formObject.name.trim() === '') {
        isValid = false;
        errorMessage = 'Please enter your name.';
    } else if (!formObject.email || !isValidEmail(formObject.email)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
    } else if (!formObject.message || formObject.message.trim() === '') {
        isValid = false;
        errorMessage = 'Please enter a message.';
    }
    
    // Show error or success message
    const messageElement = form.querySelector('.form-message') || document.createElement('div');
    messageElement.className = 'form-message';
    
    if (!form.querySelector('.form-message')) {
        form.appendChild(messageElement);
    }
    
    if (!isValid) {
        messageElement.textContent = errorMessage;
        messageElement.classList.add('error');
        messageElement.classList.remove('success');
    } else {
        // In a real implementation, this would send data to a server
        messageElement.textContent = 'Thank you for your message! We will get back to you soon.';
        messageElement.classList.add('success');
        messageElement.classList.remove('error');
        
        // Reset form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = 'form-message';
        }, 5000);
    }
}

/**
 * Validate Email Format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Add event listeners to contact forms when they exist
 */
document.addEventListener('DOMContentLoaded', function() {
    const contactForms = document.querySelectorAll('form.contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
});


/**
 * Initialize Lazy Loading for Image Placeholders
 * Replaces placeholder divs with actual images that use lazy loading
 */
function initLazyLoading() {
    // Sample image data - in a real site, this would come from a database or CMS
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    
    // Sample image URLs for different sections
    const sampleImages = {
        'approach': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'service-basic': 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'service-puppy': 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'service-behavior': 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'map': 'https://maps.googleapis.com/maps/api/staticmap?center=Lake+Norman,NC&zoom=10&size=600x400&key=YOUR_API_KEY',
        'blog-commands': 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'blog-puppy': 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'blog-boat': 'https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'instagram': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    };
    
    // Process each placeholder
    imagePlaceholders.forEach((placeholder, index) => {
        // Determine which image to use based on the placeholder's context
        let imageUrl = '';
        let altText = '';
        
        // Check parent elements to determine context
        const parentService = placeholder.closest('.service-card');
        const parentBlog = placeholder.closest('.blog-card');
        const parentApproach = placeholder.closest('.approach-image');
        const parentMap = placeholder.closest('.service-areas-map');
        const parentInstagram = placeholder.closest('.instagram-item');
        
        if (parentApproach) {
            imageUrl = sampleImages.approach;
            altText = 'Dog trainer working with a dog outdoors';
        } else if (parentService) {
            const serviceTitle = parentService.querySelector('h3').textContent.toLowerCase();
            if (serviceTitle.includes('obedience')) {
                imageUrl = sampleImages['service-basic'];
                altText = 'Dog learning basic obedience commands';
            } else if (serviceTitle.includes('puppy')) {
                imageUrl = sampleImages['service-puppy'];
                altText = 'Puppy in socialization training';
            } else if (serviceTitle.includes('behavior')) {
                imageUrl = sampleImages['service-behavior'];
                altText = 'Dog trainer working on behavior modification';
            }
        } else if (parentBlog) {
            const blogTitle = parentBlog.querySelector('h3').textContent.toLowerCase();
            if (blogTitle.includes('commands')) {
                imageUrl = sampleImages['blog-commands'];
                altText = 'Dog following commands during training';
            } else if (blogTitle.includes('puppy') || blogTitle.includes('socialization')) {
                imageUrl = sampleImages['blog-puppy'];
                altText = 'Puppy socialization class';
            } else if (blogTitle.includes('boat') || blogTitle.includes('lake')) {
                imageUrl = sampleImages['blog-boat'];
                altText = 'Dog on a boat at Lake Norman';
            }
        } else if (parentMap) {
            imageUrl = sampleImages.map;
            altText = 'Map of Lake Norman service areas';
        } else if (parentInstagram) {
            imageUrl = sampleImages.instagram;
            altText = 'Dog training success story';
        } else {
            // Default image if context can't be determined
            imageUrl = sampleImages.approach;
            altText = 'Lake Norman Dog Training';
        }
        
        // Create image element with lazy loading
        if (imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = altText;
            img.loading = 'lazy'; // Add lazy loading attribute
            img.className = 'lazy-loaded-image';
            
            // Replace placeholder with image
            placeholder.parentNode.replaceChild(img, placeholder);
        }
    });
}

// Initialize lazy loading on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functions
    initMobileMenu();
    initTestimonialSlider();
    initSmoothScrolling();
    
    // Initialize lazy loading
    initLazyLoading();
});

