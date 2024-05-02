// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  const totop = document.querySelector("#to-top");

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    totop.classList.remove("hidden");
    totop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    totop.classList.remove("flex");
    totop.classList.add("hidden");
  }
};
// hamburger
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navmenu) {
    hamburger.classList.remove("hamburger-active");
    navmenu.classList.add("hidden");
  }
});

//  dark mode
const darktoggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darktoggle.addEventListener("click", function () {
  if (darktoggle.Checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  darktoggle.Checked = true;
} else {
  document.documentElement.classList.remove("dark");
  darktoggle.Checked = false;
}
