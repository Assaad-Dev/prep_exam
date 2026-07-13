
# DriveLine Motors - Premium Used Car Dealership Website

A modern, responsive car dealership website built with HTML, CSS, and vanilla JavaScript. This project showcases a professional automotive dealership website with features like car inventory browsing, filtering, contact forms, and more.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Dynamic Inventory**: Car inventory loaded from JavaScript array and displayed dynamically
- **Advanced Filtering**: Filter cars by make, price range, and year
- **Search Functionality**: Search cars by make or model
- **Modal Details**: View detailed information about each car in a modal popup
- **Contact Forms**: Functional contact and financing forms with client-side validation
- **Testimonial Slider**: Auto-rotating testimonials with manual navigation
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Smooth Scrolling**: Smooth scrolling behavior for anchor links
- **CSS Variables**: Consistent theming using CSS custom properties
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility

## Files

- `index.html` - Main HTML structure
- `style.css` - All styling and responsive design
- `script.js` - All functionality including filtering, modals, form handling, etc.
- `README.md` - This file

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox, Grid, CSS Variables, and Animations
- **Vanilla JavaScript** - All functionality without frameworks or libraries
- **Font Awesome** - For icons (loaded from CDN)
- **Google Fonts** - Poppins font family (loaded from CDN)

## How to Run Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required

## Features in Detail

### Home Page
- Hero section with compelling headline and call-to-action buttons
- Featured services section highlighting key offerings
- Smooth scrolling navigation

### Inventory Section
- Displays all available vehicles in a responsive grid
- Each car card shows: make, model, year, price, mileage, and image
- "View Details" button opens a modal with more information
- "Contact Seller" button opens contact form pre-filled with car interest

### Filtering & Search
- Filter by make (dropdown)
- Filter by price range (dropdown)
- Filter by year range (dropdown)
- Real-time filtering as options change
- Reset filters button to clear all selections

### Modal Details
When clicking "View Details" on a car card:
- Larger image display
- Complete vehicle specifications
- Short description
- "Contact Seller" button

### About Section
- Information about the dealership
- Statistics and achievements
- Team information (placeholder)

### Services Section
- Vehicle inspection services
- Financing assistance
- Trade-in options
- After-sales support

### Contact Section
- Contact form with validation
- Dealership information (address, phone, email, hours)
- Map placeholder

### Footer
- Quick navigation links
- Contact information
- Social media icons
- Copyright information

## Customization

### Updating Inventory
To modify the car inventory, edit the `inventory` array in `script.js`. Each car object should have:
- `id`: Unique number
- `make`: Vehicle manufacturer
- `model`: Vehicle model
- `year`: Year of manufacture
- `price`: Price in USD
- `mileage`: Mileage in miles
- `image`: URL to vehicle image

### Changing Colors
Modify the CSS variables in the `:root` section of `style.css`:
- `--primary-color`: Main dark color
- `--secondary-color`: Accent blue
- `--accent-color`: Accent red
- `--light-color`: Background color
- `--dark-color`: Text color

### Adding Testimonials
Edit the testimonial slides in the HTML within the `.testimonials-slider` section.

## Deployment to Netlify

1. Push this repository to a GitHub repository
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: (leave blank - no build needed)
   - Publish directory: `/` (root directory)
6. Click "Deploy site"

Netlify will automatically deploy your site and provide you with a unique subdomain (e.g., `your-site-name.netlify.app`).

## Browser Support

This website is designed to work in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Credits

- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Font from [Google Fonts](https://fonts.google.com)

## License

This project is open source and available under the MIT License.