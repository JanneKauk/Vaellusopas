'use strict'
const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".buttons");

  burger.addEventListener('click', () => {
    nav.classList.toggle("nav-active");
  });
}

navSlide();