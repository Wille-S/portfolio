AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const langElements = document.querySelectorAll('[data-lang]');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedLang = button.getAttribute('data-language');

            langElements.forEach(el => {
                if (el.getAttribute('data-lang') === selectedLang) {
                    el.style.display = '';
                } else {
                    el.style.display = 'none';
                }
            });
        });
    });
});
(function() {
    const user = 'wille.simila';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;
    document.getElementById('contact-link-en').href = `mailto:${email}`;
    document.getElementById('contact-link-fi').href = `mailto:${email}`;
})();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
