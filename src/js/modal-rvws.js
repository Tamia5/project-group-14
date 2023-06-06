(() => {
  const refs = {
    openModalBtn: document.querySelector(".rvws-data-modal-open"),
    closeModalBtn: document.querySelector(".rvws-data-modal-close"),
    modal: document.querySelector(".rvws-data-modal"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();