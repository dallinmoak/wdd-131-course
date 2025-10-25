const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  menuButton.classList.toggle("change");
});
