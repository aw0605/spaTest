const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "/home.html",
  "/about": "/about.html",
  "/contact": "/contact.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("root").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
