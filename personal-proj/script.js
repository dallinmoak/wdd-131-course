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

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", headerMU);

  document.body.insertAdjacentHTML("beforeend", layoutMU);

  const postsContainer = document.getElementById("posts-container");
  posts.forEach((post) => {
    const author = authors.find((a) => a.id === post.authorId);
    postsContainer.insertAdjacentHTML(
      "beforeend",
      postTemplate(post, author)
    );
  });
});
