document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            link.style.pointerEvents = 'none';
        }
    });
});
