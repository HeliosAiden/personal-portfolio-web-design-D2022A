import { createElement } from "./injectElements.js";

const mainComponets = [
  {
    el: "section",
    id: "home",
    className: "home",
    path: `components/home.html`,
  },
  {
    el: "section",
    id: "about",
    className: "about section",
    path: `components/about.html`,
  },
  {
    el: "section",
    id: "portfolio",
    className: "section portfolio",
    path: `components/portfolio.html`,
  },
  {
    el: "section",
    id: "reviews",
    className: "section",
    path: `components/reviews.html`,
  },
  {
    el: "footer",
    id: "",
    className: "footer",
    path: `components/footer.html`,
  },
];

const main = document.querySelector("main.main-content");
// Inject components into main
mainComponets.map((i) => {
  const section = createElement(i);
  if (section) {
    main.append(section);
  }
});
