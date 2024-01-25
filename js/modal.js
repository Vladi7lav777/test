const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hiden');

modalBtnClose.addEventListener('click', toggleModal);

for (let i = 0; i < modalBtnOpen.length; i++) {
  modalBtnOpen[i].addEventListener('click', toggleModal);
}
