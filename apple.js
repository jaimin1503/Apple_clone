let burger = document.querySelector("#burger");
let navebar = document.querySelector(".navebar");
let ula = document.querySelector(".ula");
let logo = document.querySelector(".apple-logo");
let search = document.querySelector(".search");
let bag = document.querySelector(".bag");
burger.addEventListener("click", () => {
  navebar.classList.toggle("h_nav_resp");
  ula.classList.toggle("v_nav_resp");
  logo.classList.toggle("fixed2");
  search.classList.toggle("fixed2");
  bag.classList.toggle("fixed2");
});
