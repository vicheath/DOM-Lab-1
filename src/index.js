import "../src/style.css";

const body = document.querySelector("body");
const mainEl = document.querySelector("main");
const mainBgColor = getComputedStyle(body).getPropertyValue("--main-bg");
mainEl.style.backgroundColor = mainBgColor;
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";

const topMenuBgColor = getComputedStyle(body).getPropertyValue("--top-menu-bg");
topMenuEl.style.backgroundColor = topMenuBgColor;
topMenuEl.classList.add("flex-around");

var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((link) => {
  const linkElement = document.createElement("a");
  linkElement.href = link.href;
  linkElement.textContent = link.text;
  topMenuEl.appendChild(linkElement);
});