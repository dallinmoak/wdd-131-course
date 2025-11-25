import { headerMU } from "./scripts/common.js";
import { posts, authors } from "./scripts/data.js";

const postTemplate = (post, author) => `
<a href="./post/index.html?id=${post.id}">
  <article class="post">
    <h2>Post by ${author.name}</h2>
    <p>${post.content}</p>
    <p><strong>Date:</strong> ${post.date || "Unknown"}</p>
    <p><strong>Likes:</strong> ${post.likes.length}</p>
  </article>
</a>
`;

const layoutMU = `
<main>
  <section id="posts-container"></section>
</main>
`;

const authorOptions = authors
  .map(
    (author) => `<option value="${author.id}">${author.name}</option>`
  )
  .join("");

const filterMU = `
<div class="filter">
  <label for="author-filter">Filter by Author:</label>
  <select id="author-filter">
    <option value="">All Authors</option>
    ${authorOptions}
  </select>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", headerMU);

  document.body.insertAdjacentHTML("beforeend", layoutMU);

  document.querySelector("main").insertAdjacentHTML("afterbegin", filterMU);

  const authorFilter = document.getElementById("author-filter");

  let filteredPosts = posts;

  const renderPosts = () => {
    const postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = "";
    filteredPosts.forEach((post) => {
      const author = authors.find((a) => a.id === post.authorId);
      postsContainer.insertAdjacentHTML(
        "beforeend",
        postTemplate(post, author)
      );
    });
  }
  
  authorFilter.addEventListener("change", (event) => {
    const selectedAuthorId = event.target.value;
    filteredPosts = selectedAuthorId
      ? posts.filter((post) => post.authorId == selectedAuthorId)
      : posts;

    renderPosts();
  });


  renderPosts();
});
