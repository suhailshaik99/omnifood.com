console.log("Hello world!");
const myName = "shaik suhail";
const h1 = document.querySelector(".heading-primary");
// Set current year
const yearEl = document.querySelector("#year");
const year = new Date().getFullYear();
yearEl.textContent = year;
//
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
