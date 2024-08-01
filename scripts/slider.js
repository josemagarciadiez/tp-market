const $slides = document.querySelectorAll("picture.slide");
const $dots = document.querySelectorAll("span.slider-dot");

let currentSlide = 0;
let sliderInterval;

/**
 * Muestra el slide correspondiente en pantalla.
 * @param {number} n - El indice del slide a mostrar.
 * @returns void
 */
function showSlide(n) {
  // 1. Oculta todos los $slides y quita clase "selected"
  // a todos los $dots.
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.display = "none";
    $dots[i].classList.remove("selected");
  }
  // 2. Muestra el $slide correspondiente
  // y pone clase "selected" al $dot correspondiente.
  $slides[n].style.display = "block";
  $dots[n].classList.add("selected");
  // 3. Actualiza el indice global para saber que $slide
  // se esta mostrando.
  currentSlide = n;
}

/**
 * Muestra el slide siguiente en pantalla.
 * @returns void
 */
function nextSlide() {
  // 1. Chequea si actualmente se esta mostrando
  // el último $lide.
  if (currentSlide === $slides.length - 1) {
    // Si es así, se actualizar el indice al primer $slide.
    currentSlide = 0;
  } else {
    // Si no, se aumenta el indice a la posición siguiente.
    currentSlide++;
  }
  // Muestra el $slide correspondiente en pantalla.
  showSlide(currentSlide);
}

/**
 * Inicia un intervalo automatico para cambiar el indice global.
 * Cada 5 segundos se cambia el indice global, de manera circular.
 */
function startInterval() {
  sliderInterval = setInterval(nextSlide, 5000);
}

/*
 * Carga de evento "click" a todos los $dots.
 */
for (let i = 0; i < $dots.length; i++) {
  /**
   * 1. Muestra el slide correspondiente a la posición del $dot.
   * 2. Limpia el intervalo actual.
   * 3. Inicial el intervalo otra vez.
   */
  $dots[i].addEventListener("click", function () {
    showSlide(i);
    clearInterval(sliderInterval);
    startInterval();
  });
}

// Comienzo animación
startInterval();
