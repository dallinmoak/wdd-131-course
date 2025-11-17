const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781],
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521],
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564],
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619],
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996],
  },
];

const buildElWithText = (tag, text) => {
  const el = document.createElement(tag);
  el.appendChild(document.createTextNode(text));
  return el;
}


const buildHikeEl = (hike) => {
  // I'm doing a thing where I don't use any template literals and only create el with the official DOM API, no string interpolation
  const hikeEl = document.createElement("div");
  hikeEl.classList.add("hike-content");
  hikeChildren = []
  hikeChildren.push(
    buildElWithText("h2", hike.name)
  )
  const tagsEl = document.createElement("div");
  tagsEl.classList.add("hike-tags");
  hike.tags.forEach((tag) => {
    const tagButton = buildElWithText("button", tag);
    tagsEl.appendChild(tagButton);
  })
  hikeChildren.push(tagsEl);
  hikeChildren.push(buildElWithText("p", hike.description));
  const ratingWrapper = document.createElement("p");
  const ratingEl = document.createElement("span");
  ratingEl.classList.add("rating");
  ratingEl.setAttribute("role", "img");
  ratingEl.setAttribute("aria-label", `${hike.difficulty} out of 5`);
  let rating = "";
  for (let i = 0; i < hike.difficulty; i++) {
    rating += "🥾";
  }
  for (let i = hike.difficulty; i < 5; i++) {
    rating += "▫️";
  }
  ratingEl.appendChild(document.createTextNode(rating));
  ratingWrapper.appendChild(ratingEl);
  hikeChildren.push(ratingWrapper);
  hikeChildren.forEach((child) => hikeEl.appendChild(child));
  return hikeEl;
}

function renderHikes(hikes) {
  resultsEl.innerHTML = "";
  hikes.forEach((hike) => {
    const hikeEl = buildHikeEl(hike);
    resultsEl.appendChild(hikeEl);
  });
}

const searchEl = document.querySelector("#search");
const searchButtonEl = document.querySelector("#search-button");
const resultsEl = document.querySelector("#hike-container");

searchButtonEl.addEventListener("click",()=> {
  const searchTerm = searchEl.value.toLowerCase();
  const filteredHikes = hikes.filter((hike) => {
    const nameMatch = hike.name.toLowerCase().includes(searchTerm);
    let tagsMatch = false;
    hike.tags.forEach(tag => tagsMatch = tag.toLowerCase().includes(searchTerm));
    const descriptionMatch = hike.description.toLowerCase().includes(searchTerm);
    return nameMatch || tagsMatch || descriptionMatch;
  });
  renderHikes(filteredHikes);
});

document.addEventListener("DOMContentLoaded", () => {
  const randomIndex = Math.floor(Math.random() * hikes.length);
  const initialHikes = [hikes[randomIndex]];
  renderHikes(initialHikes);
});