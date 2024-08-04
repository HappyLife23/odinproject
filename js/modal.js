//************* */ Modal Project *************//
//************* */ Modal Project *************//

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

//* Show modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//* Close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//* Stänger modalen med hjälp av Escape-knappen
document.addEventListener('keydown', e => {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden ')) {
    closeModal();
  }
});
