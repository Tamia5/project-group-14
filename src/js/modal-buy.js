(() => {
  const refs = {
    openModalBtn: document.querySelector(".top-data-modal-open"),
   closeModalBtn: document.querySelector("[data-modal-close-buy]"),
    modal: document.querySelector("[data-modal-buy]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
  const refs = {
    openModalBtn: document.querySelector(".hero-data-modal-open"),
  closeModalBtn: document.querySelector(".hero-data-modal-close"),
     modal: document.querySelector("[data-modal-buy]"),
  };


  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }