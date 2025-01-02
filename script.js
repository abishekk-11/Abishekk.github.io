

var typed = new Typed(".multiple-text", {
    strings: ["CS Student", "Data Scientist", "Soccer Player"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

var typed = new Typed(".urmom", {
    strings: [ "Languages", "Web Services","Open Software Sources"],
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
