document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById('mobile-menu');
    const navbarLinks = document.getElementById('navbar-links');
    const closeMenu = document.getElementById('close-menu'); // 👈 ADD THIS

    // Open / toggle menu
    if (menuToggle && navbarLinks) {
        menuToggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // 👇 CLOSE BUTTON (X)
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }

    // Smooth scroll + close menu on link click
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close menu after click
            navbarLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

});