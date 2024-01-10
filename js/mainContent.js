import { createElement } from "./injectElements.js";

const sectionURLs = [
  {
    el: "section",
    id: "home",
    className: "home",
    path: `templates/home.html`,
  },
  {
    el: "section",
    id: "about",
    className: "about section",
    path: `templates/about.html`,
  },
  {
    el: "section",
    id: "portfolio",
    className: "section portfolio",
    path: `templates/portfolio.html`,
  },
  {
    el: "section",
    id: "reviews",
    className: "section",
    path: `templates/reviews.html`,
  },
  {
    el: "footer",
    id: "",
    className: "footer",
    path: `templates/footer.html`,
  },
];

const main = document.querySelector("main.main-content");
sectionURLs.map((i) => {
  const section = createElement(i);
  if (section) {
    main.append(section);
  }
});
