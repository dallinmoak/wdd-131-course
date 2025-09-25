const content = [
  {
    index: 0,
    title: "HyperText Markup Language",
    info: [
      "Defines the structure and content of a web page.",
      "Without HTML there's nothing for the browser to display.",
    ],
    img: "images/html.png",
  },
  {
    index: 1,
    title: "Cascading Style Sheets",
    info: [
      "Controls how the HTML elements look.",
      "Without CSS pages look plain and unstyled.",
    ],
    img: "images/css.png",
  },
  {
    index: 2,
    title: "JavaScript",
    info: [
      "Adds interactivity and dynamic behavior.",
      "Without JavaScript nothing on the page responds dynamically to user actions.",
    ],
    img: "images/js.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  fillContentArea(content);
});

const fillContentArea = (list) => {
  const carousel = document.getElementById("carousel");

  Array.from(carousel.children).forEach((child, index) => {
    if (list[index]) {
      const data = list[index];
      child.setAttribute("data-index", data.index);
      child.innerHTML = `
        <img src="${data.img}" alt="${data.title} logo" />
        <h2>${data.title}</h2>
        <ul class="list">
            ${data.info.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        `;
    }
  });
};

const previousButton = document.querySelector(".item-prev");
const nextButton = document.querySelector(".item-next");

const shiftCarousel = (direction) => {
  const currentList = Array.from(
    document.getElementById("carousel").children
  ).map((child) => {
    return child.getAttribute("data-index");
  });
  if (direction === "next") {
    newList = [...currentList.slice(1), currentList[0]];
  } else if (direction === "prev") {
    newList = [currentList.pop(), ...currentList];
  }
  fillContentArea(newList.map((i) => content[i]));
};

previousButton.addEventListener("click", () => shiftCarousel("prev"));
nextButton.addEventListener("click", () => shiftCarousel("next"));
