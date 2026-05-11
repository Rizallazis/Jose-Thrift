document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 50; // More forgiving trigger point

            if (revealTop < windowHeight - revealPoint) {
                if (reveal.classList.contains('reveal-stagger')) {
                    const delay = parseInt(reveal.dataset.delay) || 0;
                    setTimeout(() => {
                        reveal.classList.add('active');
                    }, delay);
                } else {
                    reveal.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (simple version)
    // Add logic here if a mobile menu button is added to the HTML

    // Hero Slideshow
    const heroImg = document.getElementById('hero-slideshow');
    if (heroImg) {
        const images = [
            'assets/img/product-graphic.png',
            'assets/img/product-basic.png',
            'assets/img/product-pants.png',
            'assets/img/product-shorts.png'
        ];
        let currentIndex = 0;

        setInterval(() => {
            heroImg.style.opacity = '0';
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                heroImg.src = images[currentIndex];
                heroImg.style.opacity = '1';
            }, 1000); // Wait for fade out
        }, 4000); // Change every 4 seconds
    }
});
