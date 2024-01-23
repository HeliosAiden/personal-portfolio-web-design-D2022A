import a from "./injectElements.js";
// import c from "/constants/components.js";
import b from "/constants/components.js";

const rootDir = window.location.pathname
if (rootDir == '/personal-portfolio-web-design-D2022A/') {
  await import('./constants/components.js').then(i => {
    console.log(i)
  })
}

b.map((i) => a(i));
