const header = document.querySelector('.site-header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    const mobileMenu = document.createElement('nav');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.setAttribute('aria-label', 'Menú móvil');

    Array.from(mainNav.querySelectorAll('a')).forEach((link) => {
        const clone = link.cloneNode(true);
        mobileMenu.appendChild(clone);
    });

    document.body.appendChild(mobileMenu);

    const closeMenu = () => {
        mobileMenu.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
    };

    const openMenu = () => {
        mobileMenu.classList.add('is-open');
        menuToggle.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Cerrar menú');
    };

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = mobileMenu.classList.contains('is-open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener('click', (event) => {
        const clickedInsideMenu = mobileMenu.contains(event.target);
        const clickedOnToggle = menuToggle.contains(event.target);
        if (!clickedInsideMenu && !clickedOnToggle) {
            closeMenu();
        }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

const cursor = document.querySelector('.cursor-dot');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactives = document.querySelectorAll('a, button, .preview-card');
    interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(4)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.border = '1px solid var(--color-oliva)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--color-oliva)';
            cursor.style.border = 'none';
        });
    });
}

const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.review-slide'));
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

if (track && slides.length > 0) {
    let currentIndex = 0;

    const updateCarousel = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
}
