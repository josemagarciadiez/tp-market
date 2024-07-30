const $toggleMenu = document.querySelector("div.menu-toggle");
const $menuIcon = document.querySelector("div.menu-toggle i");
const $menu = document.querySelector("div.dropdown-menu");

$toggleMenu.addEventListener("click", function () {
  $menu.classList.toggle("open");
  const isOpen = $menu.classList.contains("open");
  if (isOpen) {
    $menuIcon.classList = "fa-solid fa-xmark fa-xl";
  } else {
    $menuIcon.classList = "fa-solid fa-bars fa-xl";
  }
});

const $cart = document.querySelector("section.cart-section");

function showCart() {
  $cart.classList.toggle("hidden");
  const isOpen = !$cart.classList.contains("hidden");
  if (isOpen) {
    $showCartText.innerText = "Ocultar carrito";
  } else {
    $showCartText.innerText = "Ver carrito";
  }
}

const $showCartButton = document.getElementById("show-cart_button");
const $showCartLink = document.getElementById("show-cart_link");
const $showCartText = document.querySelector("#show-cart_link span");

// Check if the DOM elements are null before add the listeners,
// because in index.html and contact.html they are not present.
// Console error.
if ($showCartButton && $showCartLink) {
  $showCartButton.addEventListener("click", showCart);
  $showCartLink.addEventListener("click", showCart);
}
