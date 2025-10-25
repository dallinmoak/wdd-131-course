const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

// Event listener for opening the modal
gallery.addEventListener("click", openModal);

function openModal(e) {
  const dialogImageEl = document.querySelector("dialog img");
  if (e.target.tagName === "IMG") {
    modalImage.src = e.target.src.replace("sm", "full");
    modal.showModal();
  }
}
// Close modal on button click
closeButton.addEventListener("click", () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
