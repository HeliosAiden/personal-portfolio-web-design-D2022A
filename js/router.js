const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
};

const routes = {
  404: "./pages/404.html",
  "./": "./pages/index.html",
  "./about": "./pages/about.html",
  "./contact": "./pages/contact.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
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

window.route = route;
handleLocation();
