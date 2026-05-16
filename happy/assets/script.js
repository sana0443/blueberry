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

const form = document.getElementById("enquiry-form");
const result = document.getElementById("result");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        });

        const data = await response.json();

        if (response.status == 200) {
            result.innerHTML = "Message sent successfully ✅";

            // Clear form fields
            form.reset();

        } else {
            result.innerHTML = data.message;
        }

    } catch (error) {
        result.innerHTML = "Something went wrong!";
    }

    setTimeout(() => {
        result.innerHTML = "";
    }, 3000);
});
