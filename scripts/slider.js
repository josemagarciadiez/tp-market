const $slides = document.querySelectorAll("picture.slide");
const $dots = document.querySelectorAll("span.slider-dot");

function showSlide(n) {
  for (let i = 0; i < $slides.length; i++) {
    if (n === i) {
      $slides[i].style.display = "block";
    } else {
      $slides[i].style.display = "none";
    }
  }
}

for (let i = 0; i < $dots.length; i++) {
  $dots[i].addEventListener("click", function () {
    showSlide(Number($dots[i].id));
  });
}
