# Australia's Best Painting - Professional Website

A modern, responsive 3-page website for Australia's Best Painting, a professional painting service company based in Sydney, Australia.

## 🎨 Features

### Design & Branding
- **Color Scheme**: Black (#000000) and Light Blue (#00bcd4) matching the company trailer
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Typography**: Montserrat for headings, Open Sans for body text

### Pages

#### 1. Home Page (index.html)
- Hero section with call-to-action buttons
- About section with company statistics
- Services preview with icons
- Client testimonials
- Project gallery
- Why choose us section

#### 2. Services Page (services.html)
- Detailed service descriptions
- Interior & Exterior painting
- High-pressure cleaning services
- Repairs & maintenance
- Specialty services
- Service areas across Sydney
- Simple 4-step process explanation

#### 3. Contact Page (contact.html)
- Comprehensive contact form with validation
- Multiple contact methods (phone, email)
- Service area information
- FAQ section
- Business hours
- Interactive map placeholder

### Technical Features
- **Mobile Navigation**: Hamburger menu with smooth transitions
- **Form Validation**: Client-side validation for contact form
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **Animation on Scroll**: Elements animate when entering viewport
- **Gallery Lightbox**: Click to view larger images
- **Phone Number Formatting**: Automatic Australian phone number formatting
- **SEO Optimized**: Meta tags and semantic HTML structure

## 📱 Contact Information

- **Phone**: 0421 900 066
- **Email**: ausbestpainting@outlook.com
- **License**: Lic No: 288332C
- **Service Area**: All Sydney Metropolitan Areas

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side requirements (static HTML/CSS/JS)

### Installation

1. **Download or Clone the Repository**
   ```bash
   git clone [repository-url]
   # or download as ZIP and extract
   ```

2. **Open the Website**
   - Navigate to the project folder
   - Double-click `index.html` to open in your default browser
   - Or right-click and select "Open with" to choose a specific browser

### Deployment Options

#### Option 1: GitHub Pages (Free)
1. Upload to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be available at `https://[username].github.io/[repository-name]/`

#### Option 2: Netlify (Free)
1. Visit [netlify.com](https://www.netlify.com/)
2. Drag and drop the project folder
3. Get instant deployment with a custom URL

#### Option 3: Traditional Web Hosting
1. Upload all files via FTP to your web server
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## 📁 File Structure

```
australia-best-painting/
│
├── index.html          # Home page
├── services.html       # Services page
├── contact.html        # Contact page
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## 🛠️ Customization

### Updating Contact Information
Edit the following in all HTML files:
- Phone number: Search for `0421 900 066`
- Email: Search for `ausbestpainting@outlook.com`
- License number: Search for `288332C`

### Changing Colors
Edit variables in `styles.css`:
```css
:root {
    --primary-black: #000000;
    --primary-blue: #00bcd4;
    --light-blue: #4dd0e1;
    /* ... other colors */
}
```

### Adding/Removing Services
1. Edit the services section in `index.html`
2. Update detailed services in `services.html`
3. Modify service options in the contact form (`contact.html`)

### Updating Images
Replace image URLs in HTML files with your own:
- Upload images to a hosting service or use local images
- Update `src` attributes in `<img>` tags
- Recommended image sizes:
  - Hero/Banner: 1920x1080px
  - Gallery: 600x400px
  - Service images: 600x400px

## 📧 Form Handling

The contact form currently simulates submission. To make it functional:

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io/)
2. Replace form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add EmailJS SDK to `contact.html`
3. Update `script.js` with EmailJS integration

### Option 3: Backend Integration
1. Create a backend endpoint (PHP, Node.js, Python, etc.)
2. Update form action and method
3. Handle form data server-side

## 🌟 Features Breakdown

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Touch-friendly navigation
- Optimized images for different screen sizes

### Performance
- Minimal external dependencies
- Optimized CSS and JavaScript
- Lazy loading ready (add `data-src` to images)
- Debounced scroll events

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color scheme

### SEO
- Meta descriptions on all pages
- Semantic HTML5 elements
- Structured data ready
- Fast loading times

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This website was created for Australia's Best Painting. All rights reserved.

## 🤝 Support

For website issues or customization:
- Review this README file
- Check browser console for errors
- Ensure all files are in the correct location

For painting services:
- **Call**: 0421 900 066
- **Email**: ausbestpainting@outlook.com

## ✨ Credits

- **Design & Development**: Custom built for Australia's Best Painting
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Images**: Placeholder images from Unsplash (replace with actual project photos)

---

**Australia's Best Painting** - *Interior & Exterior | All Types of Painting Works*

*Local & Reliable • Free Quotes All Areas*
