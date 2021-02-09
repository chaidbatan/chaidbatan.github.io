const navBar = document.querySelector('#nav-bar');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('.menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show() {
    menu.style.display = 'block';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    menu.style.top = '0';
}
function hide() {
    menu.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
}