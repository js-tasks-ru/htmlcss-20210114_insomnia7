(function () {
  const close = document.getElementById("modal-close");
  const modal = document.getElementById("modal");
  const modalOpen = document.getElementById("modal-open");
  const fade = document.getElementById("modal-fade");

  if (!close || !modalOpen || !modal || !fade) {
    return;
  }

  const openModal = () => {
    modal.style.display = "flex";
    document.body.overflow = "hidden";
  };

  const closeModal = () => {
    modal.style.display = "none";
    document.body.overflow = "initial";
  };

  modalOpen.addEventListener("click", openModal);

  close.addEventListener("click", closeModal);

  fade.addEventListener("click", closeModal);
})();
