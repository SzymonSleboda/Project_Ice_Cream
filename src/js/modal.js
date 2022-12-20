(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-contacts]'),
    closeModalBtn: document.querySelector('[data-modal-close-contacts]'),
    modal: document.querySelector('[data-modal-contacts]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-contacts');
  }
})();
