window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
    navSlide();
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //TOGGLE NAVIGATION
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        //ANIMATION LINKS
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
            }
        });
        //BURGER ANIMATION
        burger.classList.toggle('toggle');
    });

}
