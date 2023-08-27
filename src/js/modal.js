(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.add('modal__fade-in'); // Dodaj klasę animacji
    refs.modal.classList.remove('modal__is-hidden');
  }

  function closeModal() {
    refs.modal.classList.remove('modal__fade-in'); // Usuń klasę animacji
    refs.modal.classList.add('modal__fade-out'); // Dodaj klasę animacji
    setTimeout(() => {
      refs.modal.classList.remove('modal__fade-out'); // Usuń klasę animacji po zakończeniu animacji
      refs.modal.classList.add('modal__is-hidden');
    }, 300); // Czas trwania animacji (w milisekundach)
  }
})();