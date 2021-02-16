// const navBar = document.querySelector('#nav-bar');
//const openMenu = document.querySelector('#open-menu');
//const closeMenu = document.querySelector('#close-menu');
//const menu = document.querySelector('#header');

//openMenu.addEventListener('click', show);
//closeMenu.addEventListener('click', hide);

//function show() {
//    menu.style.display = 'block';
//    menu.style.padding = '0';
  //  menu.style.margin ='0';
//    closeMenu.style.display = 'block';
//    openMenu.style.display = 'none';
//}

const nav = document.querySelector('#nav');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu')


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', hide);

function show() {
    nav.style.display = 'flex';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
}
function hide() {
    nav.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';

}