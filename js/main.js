/* ========================================
   Slean Landing Page - Main JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSwiper();
    initGSAP();
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

/* --- Navbar --- */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* --- Swiper Carousel --- */
function initSwiper() {
    new Swiper('.screenshots-swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 24,
        loop: true,
        speed: 600,
        grabCursor: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        breakpoints: {
            768: {
                spaceBetween: 32,
            },
        },
    });
}

/* --- GSAP Animations --- */
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
        .to('.hero-content', {
            opacity: 1,
            y: 0,
            duration: 0.9,
        })
        .from('.hero-badge', {
            y: 20,
            opacity: 0,
            duration: 0.5,
        }, '-=0.7')
        .from('.hero-title', {
            y: 30,
            opacity: 0,
            duration: 0.6,
        }, '-=0.4')
        .from('.hero-subtitle', {
            y: 20,
            opacity: 0,
            duration: 0.5,
        }, '-=0.3')
        .from('.hero-actions', {
            y: 20,
            opacity: 0,
            duration: 0.5,
        }, '-=0.2')
        .from('.hero-trust-badges', {
            y: 15,
            opacity: 0,
            duration: 0.5,
        }, '-=0.15')
        .from('.hero-stats', {
            y: 20,
            opacity: 0,
            duration: 0.5,
        }, '-=0.2')
        .to('.hero-phone', {
            opacity: 1,
            y: 0,
            duration: 0.8,
        }, '-=0.6')
        .from('.hero-phone', {
            y: 60,
            scale: 0.92,
            duration: 0.8,
        }, '-=0.8');

    // Floating phone animation
    gsap.to('.hero-phone', {
        y: -12,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.5,
    });

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.to(header, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                once: true,
            },
        });
        gsap.from(header, {
            y: 40,
            duration: 0.7,
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                once: true,
            },
        });
    });

    // Feature cards
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.06,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                once: true,
            },
        });
        gsap.from(card, {
            y: 50,
            duration: 0.6,
            delay: i * 0.06,
            scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                once: true,
            },
        });
    });

    // AI section
    const aiTrigger = {
        trigger: '.ai-section',
        start: 'top 75%',
        once: true,
    };

    gsap.to('.ai-phone-wrapper', {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: aiTrigger,
    });
    gsap.from('.ai-phone-wrapper', {
        x: -50,
        duration: 0.7,
        scrollTrigger: aiTrigger,
    });

    gsap.to('.ai-content', {
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: 0.15,
        ease: 'power2.out',
        scrollTrigger: aiTrigger,
    });
    gsap.from('.ai-content', {
        x: 50,
        duration: 0.7,
        delay: 0.15,
        scrollTrigger: aiTrigger,
    });

    // AI prompt examples stagger
    gsap.from('.ai-prompt-example', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.ai-examples',
            start: 'top 85%',
            once: true,
        },
    });

    // Comparison table
    gsap.to('.comparison-table', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.comparison-table',
            start: 'top 80%',
            once: true,
        },
    });
    gsap.from('.comparison-table', {
        y: 40,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.comparison-table',
            start: 'top 80%',
            once: true,
        },
    });

    // Comparison rows stagger
    gsap.from('.comparison-row', {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.comparison-table',
            start: 'top 75%',
            once: true,
        },
    });

    // Privacy detail cards
    gsap.utils.toArray('.privacy-detail-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true,
            },
        });
        gsap.from(card, {
            y: 40,
            duration: 0.6,
            delay: i * 0.12,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true,
            },
        });
    });

    // CTA section
    gsap.to('.cta-content', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.cta-content',
            start: 'top 85%',
            once: true,
        },
    });
    gsap.from('.cta-content', {
        y: 40,
        scale: 0.97,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.cta-content',
            start: 'top 85%',
            once: true,
        },
    });
}
