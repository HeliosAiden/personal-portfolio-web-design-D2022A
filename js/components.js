import a from "./injectElements.js";

const components = [
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
  {
    id: "header",
    path: `components/header.html`,
  },
  {
    id: "style",
    path: `components/customize.html`,
  },
];

components.map((i) => a(i));
