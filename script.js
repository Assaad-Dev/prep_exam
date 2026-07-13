// Inventory Data
const inventory = [
    {
        id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2021,
        price: 22500,
        mileage: 15000,
        image: "https://images.unsplash.com/photo-1589733173397-12b869571e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 2,
        make: "Honda",
        model: "CR-V",
        year: 2020,
        price: 25000,
        mileage: 18000,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 3,
        make: "Ford",
        model: "F-150",
        year: 2021,
        price: 35000,
        mileage: 12000,
        image: "https://images.unsplash.com/photo-1551208833-6bc14a3d610f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 4,
        make: "BMW",
        model: "3 Series",
        year: 2019,
        price: 28000,
        mileage: 25000,
        image: "https://images.unsplash.com/photo-1555215695-36ac1f7cce6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 5,
        make: "Mercedes-Benz",
        model: "C-Class",
        year: 2020,
        price: 32000,
        mileage: 18000,
        image: "https://images.unsplash.com/photo-1555215695-36ac1f7cce6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 6,
        make: "Audi",
        model: "A4",
        year: 2021,
        price: 29000,
        mileage: 15000,
        image: "https://images.unsplash.com/photo-1555215695-36ac1f7cce6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 7,
        make: "Toyota",
        model: "RAV4",
        year: 2020,
        price: 24000,
        mileage: 20000,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 8,
        make: "Honda",
        model: "Civic",
        year: 2021,
        price: 20000,
        mileage: 12000,
        image: "https://images.unsplash.com/photo-1589733173397-12b869571e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }
];

// DOM Elements
const inventoryGrid = document.getElementById('inventory-grid');
const makeFilter = document.getElementById('make-filter');
const priceFilter = document.getElementById('price-filter');
const yearFilter = document.getYearFilter();
const resetFiltersBtn = document.getElementById('reset-filters');
const loadMoreBtn = document.getElementById('load-more-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const financingForm = document.getElementById('financing-form');
const contactForm = document.getElementById('contact-form');

// State
let filteredInventory = [...inventory];
let currentPage = 0;
const itemsPerPage = 4;
let currentTestimonial = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayInventory();
    setupEventListeners();
    startTestimonialSlider();
});

// Event Listeners
function setupEventListeners() {
    // Filter events
    makeFilter.addEventListener('change', filterInventory);
    priceFilter.addEventListener('change', filterInventory);
    yearFilter.addEventListener('change', filterInventory);

    // Reset filters
    resetFiltersBtn.addEventListener('click', resetFilters);

    // Load more
    loadMoreBtn.addEventListener('click', loadMoreItems);

    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Testimonial slider
    prevBtn.addEventListener('click', () => changeTestimonial(-1));
    nextBtn.addEventListener('click', () => changeTestimonial(1));

    // Forms
    if (financingForm) {
        financingForm.addEventListener('submit', handleFinancingSubmit);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Inventory Functions
function displayInventory() {
    // Clear grid
    inventoryGrid.innerHTML = '';

    // Get items for current page
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = filteredInventory.slice(start, end);

    // Display items
    currentItems.forEach(item => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${item.image}" alt="${item.make} ${item.model}">
            </div>
            <div class="car-info">
                <h3>${item.make} ${item.model}</h3>
                <div class="car-details">
                    <span>${item.year}</span>
                    <span>${item.mileage.toLocaleString()} miles</span>
                </div>
                <div class="car-price">$${item.price.toLocaleString()}</div>
                <div class="car-btns">
                    <button class="view-details-btn" data-id="${item.id}">View Details</button>
                    <button class="contact-seller-btn" data-id="${item.id}">Contact Seller</button>
                </div>
            </div>
        `;
        inventoryGrid.appendChild(carCard);
    });

    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const carId = parseInt(this.getAttribute('data-id'));
            const car = inventory.find(item => item.id === carId);
            if (car) {
                showCarDetailsModal(car);
            }
        });
    });

    // Add event listeners to contact seller buttons
    document.querySelectorAll('.contact-seller-btn').forEach(button => {
        button.addEventListener('click', function() {
            const carId = parseInt(this.getAttribute('data-id'));
            const car = inventory.find(item => item.id === carId);
            if (car) {
                openContactFormWithCar(car);
            }
        });
    });

    // Show/hide load more button
    if (filteredInventory.length <= (currentPage + 1) * itemsPerPage) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function filterInventory() {
    // Reset page when filtering
    currentPage = 0;

    // Filter inventory
    filteredInventory = inventory.filter(item => {
        const makeMatch = makeFilter.value ? item.make === makeFilter.value : true;

        let priceMatch = true;
        if (priceFilter.value) {
            const [min, max] = priceFilter.value.split('-').map(Number);
            if (max) {
                priceMatch = item.price >= min && item.price <= max;
            } else {
                priceMatch = item.price >= min;
            }
        }

        let yearMatch = true;
        if (yearFilter.value) {
            switch (yearFilter.value) {
                case '2020-2024':
                    yearMatch = item.year >= 2020 && item.year <= 2024;
                    break;
                case '2015-2019':
                    yearMatch = item.year >= 2015 && item.year <= 2019;
                    break;
                case '2010-2014':
                    yearMatch = item.year >= 2010 && item.year <= 2014;
                    break;
                case 'older':
                    yearMatch = item.year < 2010;
                    break;
                default:
                    yearMatch = true;
            }
        }

        return makeMatch && priceMatch && yearMatch;
    });

    displayInventory();
}

function resetFilters() {
    makeFilter.value = '';
    priceFilter.value = '';
    yearFilter.value = '';
    filterInventory();
}

function loadMoreItems() {
    currentPage++;
    displayInventory();
}

// Mobile Menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

// Testimonial Slider
function startTestimonialSlider() {
    // Show first slide
    testimonialSlides[currentTestimonial].classList.add('active');

    // Change slide every 5 seconds
    setInterval(() => {
        changeTestimonial(1);
    }, 5000);
}

function changeTestimonial(direction) {
    // Remove active class from current slide
    testimonialSlides[currentTestimonial].classList.remove('active');

    // Calculate new index
    currentTestimonial = (currentTestimonial + direction + testimonialSlides.length) % testimonialSlides.length;

    // Add active class to new slide
    testimonialSlides[currentTestimonial].classList.add('active');
}

// Form Handlers
function handleFinancingSubmit(e) {
    e.preventDefault();
    alert('Thank you for your application! We will contact you shortly.');
    financingForm.reset();
}

function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .car-card, .financing-card, .testimonial-slide, .contact-info, .contact-form').forEach(el => {
    observer.observe(el);
});

// Add animation class to style.css if not present
const styleTag = document.createElement('style');
styleTag.textContent = `
    .feature-card, .car-card, .financing-card, .testimonial-slide, .contact-info, .contact-form {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .feature-card.animate-in, .car-card.animate-in, .financing-card.animate-in,
    .testimonial-slide.animate-in, .contact-info.animate-in, .contact-form.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .feature-card.animate-in:nth-child(1) { transition-delay: 0.1s; }
    .feature-card.animate-in:nth-child(2) { transition-delay: 0.2s; }
    .feature-card.animate-in:nth-child(3) { transition-delay: 0.3s; }
    .feature-card.animate-in:nth-child(4) { transition-delay: 0.4s; }

    .car-card.animate-in:nth-child(1) { transition-delay: 0.1s; }
    .car-card.animate-in:nth-child(2) { transition-delay: 0.2s; }
    .car-card.animate-in:nth-child(3) { transition-delay: 0.3s; }
    .car-card.animate-in:nth-child(4) { transition-delay: 0.4s; }
`;
document.head.appendChild(styleTag);

// Modal functions
function showCarDetailsModal(car) {
    const modal = document.getElementById('car-detail-modal');
    document.getElementById('modal-car-title').textContent = `${car.year} ${car.make} ${car.model}`;
    document.getElementById('modal-car-image').src = car.image;
    document.getElementById('modal-car-image').alt = `${car.year} ${car.make} ${car.model}`;
    document.getElementById('modal-car-year').textContent = car.year;
    document.getElementById('modal-car-mileage').textContent = car.mileage.toLocaleString() + ' miles';
    document.getElementById('modal-car-price').textContent = '$' + car.price.toLocaleString();

    modal.style.display = 'block';

    // When user clicks on <span> (x), close the modal
    const span = document.getElementsByClassName("close-btn")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Contact seller button in modal
    document.getElementById('modal-contact-btn').onclick = function() {
        openContactFormWithCar(car);
        modal.style.display = "none";
    }
}

function openContactFormWithCar(car) {
    // Scroll to contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

    // Set focus to the name field after a short delay
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 500);

    // Optionally, you could pre-fill a hidden field or show a message about which car they're interested in
    // For simplicity, we'll just scroll to the contact form
}