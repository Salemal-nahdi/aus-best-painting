// ===========================
// MOBILE NAVIGATION TOGGLE
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // ===========================
    // SMOOTH SCROLLING
    // ===========================
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default if it's not just "#"
            if (href !== '#') {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===========================
    // NAVBAR SCROLL EFFECT
    // ===========================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (navbar) {
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                navbar.style.background = 'rgba(0,0,0,0.95)';
            } else {
                navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                navbar.style.background = '#000000';
            }
        }
        
        lastScroll = currentScroll;
    });

    // ===========================
    // CONTACT FORM HANDLING
    // ===========================
    
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Validate form
            if (!validateForm(data)) {
                showMessage('Please fill in all required fields correctly.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Success message
                showMessage('Thank you for your inquiry! We will contact you within 24 hours.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 2000);
        });
    }
    
    function validateForm(data) {
        // Check required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'service', 'message'];
        
        for (let field of requiredFields) {
            if (!data[field] || data[field].trim() === '') {
                highlightField(field);
                return false;
            }
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            highlightField('email');
            return false;
        }
        
        // Validate phone (Australian format)
        const phoneRegex = /^(\+?61|0)[2-478]([0-9]{8})$/;
        const cleanPhone = data.phone.replace(/\s/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            highlightField('phone');
            return false;
        }
        
        return true;
    }
    
    function highlightField(fieldName) {
        const field = document.getElementById(fieldName);
        if (field) {
            field.style.borderColor = '#dc3545';
            field.focus();
            
            setTimeout(() => {
                field.style.borderColor = '';
            }, 3000);
        }
    }
    
    function showMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // ===========================
    // HORIZONTAL SCROLL INDICATORS
    // ===========================
    
    const horizontalScrollers = document.querySelectorAll('.testimonials-slider, .gallery-grid');
    
    horizontalScrollers.forEach(scroller => {
        if (window.innerWidth <= 768) {
            // Add smooth momentum scrolling for iOS
            scroller.style.webkitOverflowScrolling = 'touch';
            
            // Add scroll snap for better UX (optional)
            scroller.style.scrollSnapType = 'x proximity';
            
            const items = scroller.children;
            Array.from(items).forEach(item => {
                item.style.scrollSnapAlign = 'start';
            });
        }
    });

    // ===========================
    // GALLERY LIGHTBOX
    // ===========================
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.gallery-overlay');
            
            if (img && overlay) {
                // Create lightbox
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <span class="lightbox-close">&times;</span>
                        <img src="${img.src}" alt="${img.alt}">
                        <div class="lightbox-caption">
                            ${overlay.innerHTML}
                        </div>
                    </div>
                `;
                
                document.body.appendChild(lightbox);
                
                // Add styles for lightbox
                const style = document.createElement('style');
                style.textContent = `
                    .lightbox {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.9);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 10000;
                        animation: fadeIn 0.3s ease;
                    }
                    
                    .lightbox-content {
                        position: relative;
                        max-width: 90%;
                        max-height: 90%;
                    }
                    
                    .lightbox-content img {
                        max-width: 100%;
                        max-height: 80vh;
                        border-radius: 10px;
                    }
                    
                    .lightbox-caption {
                        text-align: center;
                        padding: 20px;
                        color: white;
                    }
                    
                    .lightbox-close {
                        position: absolute;
                        top: -40px;
                        right: 0;
                        color: white;
                        font-size: 3rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    
                    .lightbox-close:hover {
                        color: var(--primary-blue);
                    }
                    
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                `;
                document.head.appendChild(style);
                
                // Close lightbox
                const closeBtn = lightbox.querySelector('.lightbox-close');
                closeBtn.addEventListener('click', () => {
                    lightbox.remove();
                });
                
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) {
                        lightbox.remove();
                    }
                });
            }
        });
    });

    // ===========================
    // ANIMATION ON SCROLL
    // ===========================
    
    const animateElements = document.querySelectorAll('.service-card, .feature-item, .process-step, .faq-item, .about-content, .about-image, .stat');
    
    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9; // Increased trigger area
        const triggerTop = window.innerHeight * 0.1; // Add top trigger
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Element is in viewport
            if (elementTop < triggerBottom && elementBottom > triggerTop) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.classList.add('animated');
            }
            // Only hide if element is completely out of view (optional)
            else if (elementBottom < 0 || elementTop > window.innerHeight) {
                // Keep elements visible once animated
                if (!element.classList.contains('animated')) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                }
            }
        });
    };
    
    // Set initial styles
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.8s ease';
    });
    
    window.addEventListener('scroll', debounce(animateOnScroll, 10));
    animateOnScroll(); // Initial check

    // ===========================
    // PHONE NUMBER FORMATTER
    // ===========================
    
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = '';
            
            if (value.startsWith('0')) {
                // Format as: 0421 900 066
                if (value.length > 0) formattedValue = value.substr(0, 4);
                if (value.length > 4) formattedValue += ' ' + value.substr(4, 3);
                if (value.length > 7) formattedValue += ' ' + value.substr(7, 3);
            } else if (value.startsWith('+61')) {
                // Format as: +61 421 900 066
                if (value.length > 0) formattedValue = value.substr(0, 3);
                if (value.length > 3) formattedValue += ' ' + value.substr(3, 3);
                if (value.length > 6) formattedValue += ' ' + value.substr(6, 3);
                if (value.length > 9) formattedValue += ' ' + value.substr(9, 3);
            } else {
                formattedValue = value;
            }
            
            e.target.value = formattedValue;
        });
    }

    // ===========================
    // LAZY LOADING IMAGES
    // ===========================
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }

    // ===========================
    // PREVENT BODY SCROLL WHEN MENU OPEN
    // ===========================
    
    const body = document.body;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Create style element for dynamic styles
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        body.menu-open {
            overflow: hidden;
            padding-right: ${scrollBarWidth}px;
        }
    `;
    document.head.appendChild(dynamicStyles);

    // ===========================
    // YEAR UPDATE IN FOOTER
    // ===========================
    
    const yearElements = document.querySelectorAll('.footer-bottom p');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.innerHTML = element.innerHTML.replace('2024', currentYear);
    });

    // ===========================
    // ACTIVE PAGE HIGHLIGHTING
    // ===========================
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-menu a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(() => {
    // Removed parallax effect to prevent overlap issues
    // const scrolled = window.pageYOffset;
    // const parallaxElements = document.querySelectorAll('.hero');
    
    // parallaxElements.forEach(element => {
    //     const speed = 0.5;
    //     element.style.transform = `translateY(${scrolled * speed}px)`;
    // });
}, 10));

// ===========================
// PRINT FUNCTIONALITY
// ===========================

window.addEventListener('beforeprint', () => {
    // Add print-specific styles
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    // Remove print-specific styles
    document.body.classList.remove('printing');
});

console.log('Australia\'s Best Painting - Website Loaded Successfully');
console.log('For quotes, call: 0421 900 066');
console.log('Email: ausbestpainting@outlook.com');
