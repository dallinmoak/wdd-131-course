import articles from "./data.js";

const articleMD = `
<article>
  <div class="item-details">
    <div class="item-date"></div>
    <div class="item-age"></div>
    <div class="item-rating"></div>
  </div>
  <div class="item-content">
    <div class="item-title"></div>
    <div class="item-img"></div>
    <div class="item-desc"></div>
  </div>
</article>
`;

const elFromMU = (mu) => {
  const temp = document.createElement("div");
  temp.innerHTML = mu;
  return temp.firstElementChild;
};

const buildArticles = () => {
  articles.forEach((article) => {
    const articleEl = elFromMU(articleMD);
    articleEl.id = `article-${article.id}`;

    const dateEl = document.createElement("p");
    dateEl.textContent = article.date;
    articleEl.querySelector(".item-date").appendChild(dateEl);

    const ageEl = document.createElement("p");
    ageEl.textContent = article.ages;
    articleEl.querySelector(".item-age").appendChild(ageEl);

    const ratingEl = document.createElement("p");
    ratingEl.textContent = article.stars;
    articleEl.querySelector(".item-rating").appendChild(ratingEl);

    const titleEl = document.createElement("h2");
    titleEl.textContent = article.title;
    articleEl.querySelector(".item-title").appendChild(titleEl);

    const imgEl = document.createElement("img");
    imgEl.src = article.imgSrc;
    imgEl.alt = article.imgAlt;
    articleEl.querySelector(".item-img").appendChild(imgEl);

    const descEl = document.createElement("p");
    descEl.textContent = article.description;
    articleEl.querySelector(".item-desc").appendChild(descEl);

    document.getElementById("blog-content").appendChild(articleEl);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  buildArticles();
});
