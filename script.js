const closeNav = document.querySelector("#close-res-nav");

const openNav = document.querySelector("#open-res-nav");

const nav = document.querySelector("nav");

openNav.addEventListener("click", function () {
  nav.classList.add("active-res");
});

closeNav.addEventListener("click", function () {
  nav.classList.remove("active-res");
});
