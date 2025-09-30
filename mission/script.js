let selectElem = document.querySelector("select");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current == "dark") {
    document.documentElement.className = "dark";
  } else {
    document.documentElement.className = "";
  }
}
