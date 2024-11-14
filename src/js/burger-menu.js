document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.nav__burger');
    const menu = document.querySelector('.nav__menu');

    burger.addEventListener('click', function () {
        menu.classList.toggle('nav__menu--active');
    });
});


function toggleMenu() {
    const menu = document.querySelector('.nav__menu');
    menu.classList.toggle('active'); 
}

document.querySelectorAll('.nav__item > a').forEach((link) => {
    link.addEventListener('click', function (e) {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            e.preventDefault(); 
            submenu.classList.toggle('active');
        }
    });
});
