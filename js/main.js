document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul');

    mobileMenuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            nav.classList.remove('show');
        });
    });
});
