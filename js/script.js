// Elements
const navColor = document.querySelector(".navbar");
const navLink = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const lineOne = document.querySelector(".line1");
const lineTwo = document.querySelector(".line2");
const lineThree = document.querySelector(".line3");

// Navbar color change on scroll
addEventListener("scroll", changeNavColor);
function changeNavColor() {
  "use strict";
  window.pageYOffset > window.innerHeight * 0.3
    ? (navColor.style.backgroundColor = "#ffffff")
    : (navColor.style.backgroundColor = "transparent");
  window.pageYOffset > window.innerHeight * 0.3
    ? (navColor.style.boxShadow =
        "0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)")
    : (navColor.style.boxShadow = "none");
  window.pageYOffset > window.innerHeight * 0.3
    ? (navLink.style.color = "#5F6368")
    : (navLink.style.color = "#ffffff");
  //window.pageYOffset > window.innerHeight * 0.3 ? (navLink.style.opacity = "1") : (navLink.style.opacity = "0.5");
}

// Burger line rotation and show Menu
burger.addEventListener("click", showMenu);
function showMenu() {
  navLink.classList.toggle("nav-links-show");
  lineOne.classList.toggle("line1-active");
  lineTwo.classList.toggle("line2-active");
  lineThree.classList.toggle("line3-active");
  burger.classList.toggle("burger-active");
  navColor.classList.toggle("nav-bg-white");
}
