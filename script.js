// Loading Screen con mensaje colombiano
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const loaderLogo = document.querySelector('.loader-logo');
    
    // Mensajes colombianos aleatorios
    const colombianMessages = [
        'UrbanStyle Colombia 🇨🇴',
        '¡Vamos Colombia!',
        'Hecho con amor en Colombia',
        'Orgullo Colombiano',
        'De Colombia para el mundo'
    ];
    
    const randomMessage = colombianMessages[Math.floor(Math.random() * colombianMessages.length)];
    loaderLogo.textContent = randomMessage;
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
});

// Announcement Bar Close
document.querySelector('.announcement-close')?.addEventListener('click', function () {
    const announcementBar = document.querySelector('.announcement-bar');
    announcementBar.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        announcementBar.style.display = 'none';
    }, 300);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Counter Animation for Hero Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
});

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Contact form submission con mensajes colombianos
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (name && email && message) {
            // Simulate form submission con mensaje colombiano
            showNotification('¡Gracias por tu mensaje, parcero! Te contactaremos muy pronto. 🇨🇴', 'success');
            this.reset();
        } else {
            showNotification('Por favor, completa todos los campos, mi amor.', 'error');
        }
    });
}

// Newsletter subscription con estilo colombiano
const newsletterForm = document.querySelector('.newsletter');
if (newsletterForm) {
    const newsletterButton = newsletterForm.querySelector('button');
    const newsletterInput = newsletterForm.querySelector('input');

    newsletterButton.addEventListener('click', function (e) {
        e.preventDefault();
        const email = newsletterInput.value;

        if (email && email.includes('@')) {
            showNotification('¡Gracias por suscribirte, parcero! Bienvenido a la familia UrbanStyle Colombia 🇨🇴', 'success');
            newsletterInput.value = '';
        } else {
            showNotification('Por favor, ingresa un email válido, mi amor.', 'error');
        }
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.category-card, .product-card, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Shopping cart functionality (basic)
let cartCount = 0;
const cartIcon = document.querySelector('.fa-shopping-cart');

document.querySelectorAll('.btn-quick-view').forEach(button => {
    button.addEventListener('click', function () {
        cartCount++;
        updateCartDisplay();

        // Add visual feedback con estilo colombiano
        this.textContent = '¡Agregado, parcero!';
        this.style.background = '#16a34a';

        setTimeout(() => {
            this.textContent = 'Vista Rápida';
            this.style.background = '';
        }, 1500);
    });
});

function updateCartDisplay() {
    if (cartCount > 0) {
        if (!document.querySelector('.cart-badge')) {
            const badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.style.cssText = `
                position: absolute;
                top: -8px;
                right: -8px;
                background: #dc2626;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            `;
            cartIcon.parentElement.style.position = 'relative';
            cartIcon.parentElement.appendChild(badge);
        }
        document.querySelector('.cart-badge').textContent = cartCount;
    }
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Product Filter Functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            if (filter === 'all' || product.getAttribute('data-category') === filter) {
                product.style.display = 'block';
                product.style.animation = 'fadeInUp 0.5s ease';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

document.querySelector('.testimonial-next')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

document.querySelector('.testimonial-prev')?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Dots navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-play testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Wishlist Functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

document.querySelectorAll('.btn-wishlist').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;

        if (wishlist.includes(productName)) {
            wishlist = wishlist.filter(item => item !== productName);
            this.style.color = '#666';
            showNotification('Producto removido de favoritos, mi amor');
        } else {
            wishlist.push(productName);
            this.style.color = '#dc2626';
            showNotification('¡Producto agregado a favoritos, parcero! 💛💙❤️');
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistDisplay();
    });
});

// Load wishlist state
function loadWishlistState() {
    document.querySelectorAll('.btn-wishlist').forEach(btn => {
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;

        if (wishlist.includes(productName)) {
            btn.style.color = '#dc2626';
        }
    });
}

// Size Selection
document.querySelectorAll('.size').forEach(size => {
    size.addEventListener('click', function () {
        const sizeOptions = this.parentElement;
        sizeOptions.querySelectorAll('.size').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});

// Newsletter CTA Form
const newsletterCTAForm = document.querySelector('.newsletter-form-large');
if (newsletterCTAForm) {
    const button = newsletterCTAForm.querySelector('button');
    const input = newsletterCTAForm.querySelector('input');

    button.addEventListener('click', function (e) {
        e.preventDefault();
        const email = input.value;

        if (email && email.includes('@')) {
            showNotification('¡Gracias por suscribirte, parcero! Recibirás un 15% de descuento. ¡Vamos Colombia! 🇨🇴');
            input.value = '';
        } else {
            showNotification('Por favor, ingresa un email válido, mi amor.', 'error');
        }
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#dc2626'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Search Functionality
const searchIcon = document.querySelector('.fa-search');
if (searchIcon) {
    searchIcon.addEventListener('click', function () {
        const searchOverlay = document.createElement('div');
        searchOverlay.className = 'search-overlay';
        searchOverlay.innerHTML = `
            <div class="search-modal">
                <div class="search-header">
                    <input type="text" placeholder="Buscar productos..." class="search-input">
                    <button class="search-close">&times;</button>
                </div>
                <div class="search-results">
                    <div class="search-suggestions">
                        <h4>Búsquedas populares:</h4>
                        <div class="suggestion-tags">
                            <span class="tag">Camisetas</span>
                            <span class="tag">Hoodies</span>
                            <span class="tag">Sneakers</span>
                            <span class="tag">Accesorios</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        searchOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 10000;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-top: 100px;
        `;

        const searchModal = searchOverlay.querySelector('.search-modal');
        searchModal.style.cssText = `
            background: white;
            border-radius: 20px;
            width: 90%;
            max-width: 600px;
            overflow: hidden;
            animation: fadeInUp 0.3s ease;
        `;

        const searchHeader = searchOverlay.querySelector('.search-header');
        searchHeader.style.cssText = `
            display: flex;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #eee;
        `;

        const searchInput = searchOverlay.querySelector('.search-input');
        searchInput.style.cssText = `
            flex: 1;
            border: none;
            outline: none;
            font-size: 1.2rem;
            padding: 0.5rem;
        `;

        const searchClose = searchOverlay.querySelector('.search-close');
        searchClose.style.cssText = `
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #666;
        `;

        document.body.appendChild(searchOverlay);
        searchInput.focus();

        searchClose.addEventListener('click', () => {
            document.body.removeChild(searchOverlay);
        });

        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                document.body.removeChild(searchOverlay);
            }
        });
    });
}

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #dc2626, #991b1b);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Lazy Loading for Images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('.product-placeholder, .collection-placeholder, .post-placeholder').forEach(img => {
    img.style.opacity = '0.7';
    img.style.transition = 'opacity 0.5s ease';
    imageObserver.observe(img);
});

// Quick View Modal
document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${productName}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="product-image-large">
                        <div class="product-placeholder">
                            <i class="fas fa-tshirt"></i>
                        </div>
                    </div>
                    <div class="product-details">
                        <p class="price">${productPrice}</p>
                        <div class="product-description">
                            <p>Producto de alta calidad con diseño urbano único. Perfecto para cualquier ocasión casual.</p>
                        </div>
                        <div class="size-selector">
                            <h4>Talla:</h4>
                            <div class="size-options">
                                <span class="size">S</span>
                                <span class="size active">M</span>
                                <span class="size">L</span>
                                <span class="size">XL</span>
                            </div>
                        </div>
                        <div class="quantity-selector">
                            <h4>Cantidad:</h4>
                            <div class="quantity-controls">
                                <button class="qty-btn minus">-</button>
                                <span class="quantity">1</span>
                                <button class="qty-btn plus">+</button>
                            </div>
                        </div>
                        <button class="btn-add-to-cart">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        `;

        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        `;

        document.body.appendChild(modal);

        // Modal functionality
        modal.querySelector('.modal-close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        // Quantity controls
        let quantity = 1;
        const quantitySpan = modal.querySelector('.quantity');

        modal.querySelector('.plus').addEventListener('click', () => {
            quantity++;
            quantitySpan.textContent = quantity;
        });

        modal.querySelector('.minus').addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        });

        // Add to cart con estilo colombiano
        modal.querySelector('.btn-add-to-cart').addEventListener('click', () => {
            cartCount += quantity;
            updateCartDisplay();
            showNotification(`¡Listo! ${quantity} ${productName} agregado al carrito, parcero! 🇨🇴`);
            document.body.removeChild(modal);
        });
    });
});

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// Performance optimization - Debounce scroll events
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

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Existing scroll functionality
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadWishlistState();

    // Add smooth transitions to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .product-card, .category-card, .collection-item');
    interactiveElements.forEach(el => {
        el.style.transition = 'all 0.3s ease';
    });

    console.log('UrbanStyle website loaded successfully! 🔥');
});