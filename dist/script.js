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

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}