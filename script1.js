var typed = new Typed(".words", {
    strings: [ "Abishekk","Kailashram", "Krishna"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})






document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
