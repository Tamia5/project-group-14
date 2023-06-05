(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-sub-open]"),
    closeModalBtn: document.querySelector("[modal-sub-close]"),
    modal: document.querySelector("[modal-sub]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();