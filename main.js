const overLay = document.querySelector("#overlay");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menu = document.querySelector("#menu");

menuOpen.addEventListener("click", () => {
  menu.style.display = "block";
  overLay.style.display = "block";
});

menuClose.addEventListener("click", () => {
  menu.style.display = "none";
  overLay.style.display = "none";
});

overLay.addEventListener("click", () => {
  menu.style.display = "none";
  overLay.style.display = "none";
});
