import { injectElement } from "./injectElements.js";

const mainComponets = [
  {
    id: "home",
    path: `components/home.html`,
  },
  {
    id: "about",
    path: `components/about.html`,
  },
  {
    id: "portfolio",
    path: `components/portfolio.html`,
  },
  {
    id: "reviews",
    path: `components/reviews.html`,
  },
  {
    id: "footer",
    path: `components/footer.html`,
  },
];

const bodyElements = [
  {
    id: "header",
    path: `components/header.html`
  }
]

// Inject components into main
mainComponets.map((i) => {
  injectElement(i);
});

bodyElements.map(i => {
  injectElement(i);
})
