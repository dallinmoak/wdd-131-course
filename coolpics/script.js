const menuButtonMU = `<button id="menu-button">Show Menu</button>`;

const menuContentMU = `<ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">People</a></li>
          <li><a href="#">Places</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>`;

const imgMU = (src, alt) => `
<div>
  <img src="${src}" alt="${alt}">
</div>`;

const getCurrentScreenSize = () => {
  const sizeMap = {
    425: "mobile",
    768: "tablet",
    1024: "laptop",
    1440: "desktop",
  };

  const width = window.innerWidth;
  // imma just keep trying to each size until one fits
  Object.keys(sizeMap).forEach((size) => {
    if (width <= size) {
      currentScreenSize = sizeMap[size];
      return;
    }
  });

  return currentScreenSize;
};

const applyScreenSize = (size, headerDiv) => {
  switch (size) {
    case "mobile":
      headerDiv.innerHTML = menuButtonMU;
      menuButtonEl = document.getElementById("menu-button");
      menuButtonEl.addEventListener("click", () => {
        if (headerDiv.innerHTML === menuButtonMU) {
          headerDiv.innerHTML += menuContentMU;
          menuButtonEl.innerHTML = "Hide Menu";
        } else {
          headerDiv.innerHTML = menuButtonMU;
        }
      });
      break;
    case "tablet":
      headerDiv.innerHTML += menuContentMU;
      break;
    case "laptop":
      headerDiv.innerHTML += menuContentMU;
      break;
    case "desktop":
      headerDiv.innerHTML += menuContentMU;
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const headerDiv = document.getElementById("header");

  applyScreenSize(getCurrentScreenSize(),headerDiv);

  window.addEventListener("resize", () => {
    applyScreenSize(getCurrentScreenSize(),headerDiv);
  });

  const contentDiv = document.getElementById("content");
  const imageSources = [
    { src: "images/pic1.jpg", alt: "Picture 1" },
    { src: "images/pic1.jpg", alt: "Picture 2" },
    { src: "images/pic1.jpg", alt: "Picture 3" },
    { src: "images/pic1.jpg", alt: "Picture 4" },
    { src: "images/pic1.jpg", alt: "Picture 5" },
    { src: "images/pic1.jpg", alt: "Picture 6" },
  ];

  imageSources.forEach(({ src, alt }) => {
    contentDiv.innerHTML += imgMU(src, alt);
  });
});