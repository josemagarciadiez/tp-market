const $slides = document.querySelectorAll("picture.slide");
const $dots = document.querySelectorAll("span.slider-dot");

let currentSlide = 0;
let sliderInterval;

function showSlide(n) {
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.display = "none";
    $dots[i].classList.remove("selected");
  }
  $slides[n].style.display = "block";
  $dots[n].classList.add("selected");
  currentSlide = n;
}

function nextSlide() {
  if (currentSlide === $slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
}

function startInterval() {
  sliderInterval = setInterval(nextSlide, 5000);
}

for (let i = 0; i < $dots.length; i++) {
  $dots[i].addEventListener("click", function () {
    showSlide(i);
  });
}

// Comienzo animación
startInterval();
