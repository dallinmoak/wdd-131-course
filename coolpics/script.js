const menuButtonMU = `<button id="menu-button">Show Menu</button>`;

const menuContentMU = `<ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">People</a></li>
          <li><a href="#">Places</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>`;


const getModalMU = (src, alt) => `
<div id="modal" class="modal">
<div class="modal-backdrop"></div>
  <div class="modal-content">
    <span class="close">&times;</span>
    <img src="${src}" alt="${alt}">
  </div>
</div>`;

const imgMU = (src, alt) => `
<div class="img-container">
  <img src="${src}" alt="${alt}">
</div>`;

const imageSources = [
    { src: "images/pic1.jpg", alt: "Picture 1" },
    { src: "images/pic2.jpg", alt: "Picture 2" },
    { src: "images/pic1.jpg", alt: "Picture 3" },
    { src: "images/pic1.jpg", alt: "Picture 4" },
    { src: "images/pic1.jpg", alt: "Picture 5" },
    { src: "images/pic1.jpg", alt: "Picture 6" },
    { src: "images/pic1.jpg", alt: "Picture 7" },
    { src: "images/pic1.jpg", alt: "Picture 8" },
    { src: "images/pic1.jpg", alt: "Picture 9" },
  ];

const getCurrentScreenSize = () => {
  const sizeMap = {
    1440: "desktop",
    1024: "laptop",
    768: "tablet",
    425: "mobile",
  };

  const width = window.innerWidth;
  let currentScreenSize = "desktop";
  // imma just keep trying to each size until one fits
  Object.keys(sizeMap).sort((a, b) => b - a).forEach((size) => {
    if (width <= size) {
      currentScreenSize = sizeMap[size];
      return;
    }
  });
  return currentScreenSize;
};

const elFromMU = (mu) => {
  const temp = document.createElement('div');
  temp.innerHTML = mu;
  return temp.firstElementChild;
}

const applyScreenSize = (size, navEl) => {
  switch (size) {
    case "mobile":
      navEl.innerHTML = menuButtonMU;
      let menuButtonEl = document.getElementById("menu-button");
      menuButtonEl.addEventListener("click", (e) => {
        if (navEl.innerHTML === menuButtonMU) {
          navEl.appendChild(elFromMU(menuContentMU));
          e.target.textContent = "Hide Menu";
        } else {
          navEl.children[1].remove();
          e.target.textContent = "Show Menu";
        }
      });
      break;
    case "tablet":
      navEl.innerHTML = menuContentMU;
      break;
    case "laptop":
      navEl.innerHTML = menuContentMU;
      break;
    case "desktop":
      navEl.innerHTML = menuContentMU;
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navEl = document.getElementById("nav");

  applyScreenSize(getCurrentScreenSize(), navEl);

  window.addEventListener("resize", () => {
    applyScreenSize(getCurrentScreenSize(), navEl);
  });

  const contentDiv = document.getElementById("content");

  imageSources.forEach(({ src, alt }) => {
    imgEl = elFromMU(imgMU(src, alt));
    imgEl.addEventListener("click", () => {
      const srcFull = src.replace(/\.jpg$/i, "-full.jpg");
      const modalEl = elFromMU(getModalMU(srcFull, alt));
      document.body.appendChild(modalEl);
      const closeEl = document.querySelector(".close");
      if (closeEl) {
        closeEl.addEventListener("click", () => {
          modalEl.remove();
        });
      }
    });
    contentDiv.appendChild(imgEl);
  });
});