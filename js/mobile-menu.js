const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinkClose = document.querySelectorAll('.mobile-menu__link');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

for (let i = 0; i < menuLinkClose.length; i++) {
  menuLinkClose[i].addEventListener('click', toggleMenu);
}
