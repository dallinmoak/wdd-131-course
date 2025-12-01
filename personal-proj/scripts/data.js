const authors = [
  {
    id: 0,
    name: "Dallin Moak",
    bio: "supreme overlord of the internet",
    profilePic: "https://avatars.githubusercontent.com/u/32078384?v=4",
  },
  {
    id: 1,
    name: "Sam Gamgee",
    bio: "a hobbit who loves gardening and adventure",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Sean_Astin_%2827506939735%29_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "Elizabeth Banks",
    bio: "the genious behind the groundbreaking movie 'Cocaine Bear'.",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Elizabeth_Banks_2012_Shankbone_2.JPG/960px-Elizabeth_Banks_2012_Shankbone_2.JPG"
  },
  {
    id: 3,
    name: "Sleve McDichael",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 4,
    name: "Onson Sweemey",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 5,
    name: "Darryl Archideld",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 6,
    name: "Anatoli Smorin",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 7,
    name: "Rey McSriff",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 8,
    name: "Glenallen Mixon",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 9,
    name: "Mario McRlwain",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 10,
    name: "Raul Chamgerlain",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 11,
    name: "Kevin Nogilny",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 12,
    name: "Tony Smehrik",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 13,
    name: "Bobson Dugnutt",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 14,
    name: "Willie Dustice",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 15,
    name: "Jeromy Gride",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 16,
    name: "Scott Dourque",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 17,
    name: "Shown Furcotte",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 18,
    name: "Dean Wesrey",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 19,
    name: "Mike Truk",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 20,
    name: "Dwigt Rortugal",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 21,
    name: "Tim Sandaele",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 22,
    name: "Karl Dandleton",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 23,
    name: "Mike Sernandez",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  },
  {
    id: 24,
    name: "Todd Bonzalez",
    bio: "lorem ipsum",
    profilePic: "https://placehold.co/400/ff00ff/FFF.png",
  }
];

const posts = [
  {
    id: 0,
    authorId: 0,
    content: "I'm a big fan of loyalty and friendship, and most of all potatoes. I wish Sean Astin could be the face of all those things.",
    date: "2024-06-01",
    likes: [12, 17, 23, 5, 22, 3, 7],
  },
  {
    id: 1,
    authorId: 0,
    content: "Bears and drugs are a dangerous combination. I wish there was an actor turned director who could craft a narrative around that!",
    date: "2024-06-02",
    likes: [7, 4, 8, 18],
  },
  {
    id: 2,
    authorId: 1,
    content: "I love gardening and going on adventures with my friends. Potatoes are my favorite crop to grow!",
    date: "2024-06-03",
    likes: [0],
  },
  {
    id: 3,
    authorId: 2,
    content: "Directing 'Cocaine Bear' was a thrilling experience. Combining comedy with a wild true story made for an unforgettable film!",
    date: "2024-06-04",
    likes: [21, 9, 19, 2, 14, 16, 0, 3, 24, 22, 15, 11, 10, 23],
  },
  {
    id: 4,
    authorId: 2,
    content: "sometimes I wear the eyelashes from the hunger games movies to work for a power trip. Sometimes my husband wears them too.",
    date: "2024-06-05",
    likes: [3, 21, 11, 6, 23, 4, 15, 7, 17, 24, 18],
  },
  {
    id: 5,
    authorId: 0,
    content: "I'm not nessisarily afraid of bears, but I usually avoid them in the woods. I'm glad that drugs aren't real.",
    date: "2024-06-05",
    likes: [4, 24, 17, 23],
  },
  {
    id: 6,
    authorId: 1,
    content: "I once planted a potato that grew into a giant! It was quite the adventure to harvest it.",
    date: "2024-06-06",
    likes: [0,2,4,5,19],
  },
  {
    id: 7,
    authorId: 2,
    content: "I'm working on a new project that incorporates potatoes, fantasy, and Sean Astin. I can't confirm the rumors that Peter Jackson is involved.",
    date: "2024-06-07",
    likes: [10, 0, 15],
  },
];

export { authors, posts };