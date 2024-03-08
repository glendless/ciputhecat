// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const backtoTop = document.querySelector('#back-to-top');

    // if (window.parent !== window.top) {
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        backtoTop.classList.remove('hidden');
        backtoTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        backtoTop.classList.remove('flex');
        backtoTop.classList.add('hidden');
    }
};

// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if (e.target != navMenu && e.target != hamburger) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

const darkMode = document.querySelector('#dark-mode');
const html = document.querySelector('html');

darkMode.addEventListener('click', function () {
    // darkMode.checked ? html.classList.add('dark') : html.classList.remove('dark');
    if (darkMode.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// darkMode toggle
if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    // document.documentElement.classList.add('dark')
    darkMode.checked = true;
} else {
    // document.documentElement.classList.remove('dark')
    darkMode.checked = false;
}
