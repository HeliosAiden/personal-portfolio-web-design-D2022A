const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const rootRepo = "personal-portfolio-web-design-D2022A"

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/index.html": "/pages/index.html",
  [`/${rootRepo}/`]: `/${rootRepo}/pages/index.html`
};

const handleLocation = async () => {
  const path = window.location.pathname;
  let route = routes[path] ?? routes[404];
  const html = await fetch(route).then((data) => data.text());
  const element = document.getElementById("main");
  element.innerHTML = html;
  const script = element.querySelector("script");
  if (script) {
    const newScript = document.createElement("script");
    if (script.text) {
      newScript.text = script.text;
    }
    if (script.src) {
      newScript.src = script.src;
    }
    if (script.type) {
      newScript.type = script.type;
    }
    element.removeChild(script);
    element.appendChild(newScript);
  }
};

window.onpopstate = handleLocation()
window.route = route;
handleLocation();
