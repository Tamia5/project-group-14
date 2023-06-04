(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-rvws]'),
    closeModalBtn: document.querySelector('[data-modal-close-rvws]'),
    modal: document.querySelector('[data-modal-rvws]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})()