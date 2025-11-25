import {headerMU} from "../scripts/common.js";
import {posts, authors} from "../scripts/data.js";

const postDetailTemplate = (post, author) => `
<main>
  <article class="post-detail">
    <h2>Post by ${author.name}</h2>
    <p>${post.content}</p>
    <p><strong>Date:</strong> ${post.date || "Unknown"}</p>
    <p><strong>Likes:</strong> ${post.likes.map(likeTemplate).join(", ")}</p>
  </article>
</main>
`;

const likeTemplate = (like) => `<a href="../author/index.html?id=${like}">${authors.find(a => a.id == like).name}</a>`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", headerMU('..'));
  
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const post = posts.find((p) => p.id == id);
  if (post) {
    const author = authors.find((a) => a.id == post.authorId);
    document.body.insertAdjacentHTML(
      "beforeend",
      postDetailTemplate(post, author)
    );
  } else {
    document.body.insertAdjacentHTML(
      "beforeend",
      "<main><p>Post not found.</p></main>"
    );
  }
});

