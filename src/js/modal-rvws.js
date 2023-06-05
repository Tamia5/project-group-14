(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-rvws-open]"),
    closeModalBtn: document.querySelector("[modal-rvws-close]"),
    modal: document.querySelector("[modal-rvws]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();