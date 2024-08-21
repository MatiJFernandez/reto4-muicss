// Carousel

const carouselSlide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

// Buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Counter
let counter = 1;
const size = images[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// Button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

// Reset transition
carouselSlide.addEventListener("transitionend", () => {
  if (images[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = images.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (images[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = images.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  var seccionAlquiler = document.getElementById("elemento_alquilar");
  var seccionCompra = document.getElementById("elemento_comprar");

  var alquilarElements = [
    document.getElementById("alquilar"),
    document.getElementById("alquilar2"),
    document.getElementById("alquilar3"),
    document.getElementById("alquilar4"),
  ];

  var comprarElements = [
    document.getElementById("comprar"),
    document.getElementById("comprar2"),
    document.getElementById("comprar3"),
    document.getElementById("comprar4"),
  ];

  seccionAlquiler.addEventListener("click", function () {
    comprarElements.forEach(function (element) {
      element.style.display = "none";
    });
    alquilarElements.forEach(function (element) {
      element.style.display = "block";
      element.style.display = "flex";
    });
  });

  seccionCompra.addEventListener("click", function () {
    alquilarElements.forEach(function (element) {
      element.style.display = "none";
    });
    comprarElements.forEach(function (element) {
      element.style.display = "block";
      element.style.display = "flex";
    });
  });
});
