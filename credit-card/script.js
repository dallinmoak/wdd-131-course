const form = document.querySelector("form");

const handleSubmit = e => {
  e.preventDefault();
  alert("Form submitted!");
};

form.addEventListener("submit", handleSubmit);