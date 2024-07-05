const hamburger = document.querySelector (".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

//wait for user action, mouse click, perform function open new nav
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

