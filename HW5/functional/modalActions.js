export default function modalActions() {
  const cancelButton = document.getElementsByClassName(
    "modal__container__inside__buttons__cancel"
  )[0];

  let modalContainer = document.getElementsByClassName("modal__container")[0];

  cancelButton.onclick = (e) => {
    e.preventDefault();
    modalContainer.style.display = "none";
  };
  const modal = document.getElementsByClassName("modal__container__inside")[0];
  document.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      modalContainer.style.display = "none";
    }
  })
}
