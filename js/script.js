const menuLinks = document.querySelectorAll('.menu__link');
const headerLogo = document.querySelector('.header__logo');

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', (evt) => {
        evt.preventDefault();

        const href = link.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.menu').offsetHeight;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
})

function removeMenuLinks() {
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });
}

function onClick(evt) {
    evt.preventDefault();
    removeMenuLinks();
    evt.currentTarget.classList.add('active');
};
menuLinks.forEach(link => link.addEventListener('click', onClick));

function headerLogoClick(evt) {
    if (evt.target === document.querySelector('.header__logo')) {
        removeMenuLinks();
    }
}
headerLogo.addEventListener('click', headerLogoClick);
