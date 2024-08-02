const data = [
  {
    title: "Aceitunas Descarozadas 160gr",
    brand: "La Malagueña",
    price: 1551,
    stock: 10,
    imageUrl: "../assets/products/p1.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Sal Fina 100 Gr",
    brand: "Celusal",
    price: 1611,
    stock: 12,
    imageUrl: "../assets/products/p2.webp",
    onSale: true,
    discount: 0.25,
  },
  {
    title: "Aceite De Girasol 1.5 L",
    brand: "Natura",
    price: 2920,
    stock: 43,
    imageUrl: "../assets/products/p3.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Jugo Organico Sabor Limon 330ml",
    brand: "Las Brisas",
    price: 1899,
    stock: 23,
    imageUrl: "../assets/products/p4.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Ketchup Dp 250 Gr",
    brand: "Natura",
    price: 944,
    stock: 7,
    imageUrl: "../assets/products/p5.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Mayonesa 1000 Cc",
    brand: "Natura",
    price: 3139,
    stock: 19,
    imageUrl: "../assets/products/p6.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Galletitas Sabor Original 354 G 3u",
    brand: "Oreo",
    price: 3599,
    stock: 35,
    imageUrl: "../assets/products/p7.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Yerba Mate Suave 1kg",
    brand: "Playadito",
    price: 3839,
    stock: 25,
    imageUrl: "../assets/products/p8.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Arroz Blanco Largo Fino 1 Kg",
    brand: "Molinos Ala",
    price: 1799,
    stock: 15,
    imageUrl: "../assets/products/p9.webp",
    onSale: true,
    discount: 0.2,
  },
  {
    title: "Azúcar Superior Refinada 1 Kg",
    brand: "Ledesma",
    price: 1109,
    stock: 40,
    imageUrl: "../assets/products/p10.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Huevos Blancos Grandes 12u",
    brand: "Check",
    price: 2285,
    stock: 8,
    imageUrl: "../assets/products/p11.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Espinaca Congelada 400g",
    brand: "Lucchetti",
    price: 2209,
    stock: 27,
    imageUrl: "../assets/products/p12.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Brocoli 400g",
    brand: "Granja Del Sol",
    price: 2399,
    stock: 33,
    imageUrl: "../assets/products/p13.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Morcilla Rosca 400 Gr",
    brand: "Campo Austral",
    price: 1344,
    stock: 18,
    imageUrl: "../assets/products/p14.webp",
    onSale: true,
    discount: 0.3,
  },
  {
    title: "Chorizo Tradicional 400 Gr",
    brand: "Campo Austral",
    price: 1760,
    stock: 11,
    imageUrl: "../assets/products/p15.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Queso Rallado 150 G",
    brand: "La Paulina",
    price: 3499,
    stock: 29,
    imageUrl: "../assets/products/p16.webp",
    onSale: true,
    discount: 0.15,
  },
  {
    title: "Crema De Leche 350 Cc",
    brand: "La Paulina",
    price: 1844,
    stock: 14,
    imageUrl: "../assets/products/p17.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Queso Cremoso 600 G",
    brand: "La Paulina",
    price: 5334,
    stock: 22,
    imageUrl: "../assets/products/p18.webp",
    onSale: true,
    discount: 0.2,
  },
  {
    title: "Leche Entera 1 Lt",
    brand: "Manfrey",
    price: 1599,
    stock: 48,
    imageUrl: "../assets/products/p19.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Medallones De Carne Vacuna Express 4u",
    brand: "Paty",
    price: 1864,
    stock: 17,
    imageUrl: "../assets/products/p20.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Gaseosa Pomelo Suave 2.25 L",
    brand: "Cunnington",
    price: 1257,
    stock: 9,
    imageUrl: "../assets/products/p21.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Agua Mineralizada 2 Lts",
    brand: "Cellier",
    price: 739,
    stock: 45,
    imageUrl: "../assets/products/p22.webp",
    onSale: true,
    discount: 0.1,
  },
  {
    title: "Cerveza Rubia Lager 473 Ml",
    brand: "Amstel",
    price: 900,
    stock: 38,
    imageUrl: "../assets/products/p23.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Cerveza Amber Ale 473 Ml",
    brand: "Pampa Brewing Co",
    price: 1154,
    stock: 13,
    imageUrl: "../assets/products/p24.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Agua Saborizada Con Gas Citrus 2.25lt",
    brand: "Ser",
    price: 1349,
    stock: 24,
    imageUrl: "../assets/products/p25.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Desinfectante Aerosol Original 380 Ml",
    brand: "Lysoform",
    price: 2339,
    stock: 16,
    imageUrl: "../assets/products/p26.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Jabón Liquido Para Diluir 500ml Rinde 3l",
    brand: "Skip",
    price: 7691,
    stock: 6,
    imageUrl: "../assets/products/p27.webp",
    onSale: true,
    discount: 0.15,
  },
  {
    title: "Suavizante Energia Florar 500 Ml",
    brand: "Comfort",
    price: 4309,
    stock: 2,
    imageUrl: "../assets/products/p28.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Pasta Dental Ultra Blanco 90g",
    brand: "Colgate",
    price: 1636,
    stock: 22,
    imageUrl: "../assets/products/p29.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Antitranspirante En Aerosol Original 150ml",
    brand: "Dove",
    price: 2092,
    stock: 7,
    imageUrl: "../assets/products/p30.webp",
    onSale: true,
    discount: 0.1,
  },
  {
    title: "Shampoo Hidratación 1000ml",
    brand: "Plusbelle",
    price: 1566,
    stock: 5,
    imageUrl: "../assets/products/p31.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Antitranspirante Proteccion Total 150ml",
    brand: "Dove",
    price: 2939,
    stock: 33,
    imageUrl: "../assets/products/p32.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Hisopos Family 100 U",
    brand: "Q-Soft",
    price: 2190,
    stock: 50,
    imageUrl: "../assets/products/p33.webp",
    onSale: true,
    discount: 0.2,
  },
  {
    title: "Agua Micelar Detox 600 Ml",
    brand: "Teatrical",
    price: 3908,
    stock: 18,
    imageUrl: "../assets/products/p34.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Toallas Desmaquillantes 25 U",
    brand: "Algabo",
    price: 2768,
    stock: 30,
    imageUrl: "../assets/products/p35.webp",
    onSale: false,
    discount: 0,
  },
  {
    title: "Colonia Natural Black Spray 60ml",
    brand: "Kevin",
    price: 11549,
    stock: 15,
    imageUrl: "../assets/products/p36.webp",
    onSale: true,
    discount: 0.2,
  },
  {
    title: "Protector Solar Crema Toque Seco Color 50ml",
    brand: "Vichy",
    price: 49800,
    stock: 30,
    imageUrl: "../assets/products/p37.webp",
    onSale: true,
    discount: 0.3,
  },
  {
    title: "Perfume Gentleman Intense Edt 100ml",
    brand: "Givenchy",
    price: 184100,
    stock: 20,
    imageUrl: "../assets/products/p38.webp",
    onSale: true,
    discount: 0.25,
  },
];

const cart = {
  items: 0,
  subtotal: 0,
  discount: 0,
  total: 0,
  payment: "cash",
};

const PAYMENT_METHOD = {
  cash: "Efectivo",
  debit: "Tarjeta de débito",
  credit: "Tarjeta de crédito",
  app: "Mercado Pago",
};

const $cartIcon = document.querySelector("#show-cart_button i");
const $cartItems = document.querySelector("#show-cart_button span");

function animateCartIcon(items) {
  $cartItems.innerText = items.toString();
  $cartIcon.classList.add("fa-shake");
  setTimeout(() => {
    $cartIcon.classList.remove("fa-shake");
  }, 2000);
}

const $alert = document.querySelector("section.alert-section");
const $alertType = document.querySelector("div.alert-type");
const $alertContent = document.querySelector("div.alert-content");
const $closeAlertButton = document.querySelector("div.alert-close button");

// Alert type icon markup
const $success = `<i class="fa-solid fa-circle-check fa-xl"></i>`;
const $error = `<i class="fa-solid fa-circle-xmark fa-xl"></i>`;
const $info = `<i class="fa-solid fa-circle-info fa-xl"></i>`;

// Alert global timmer
let closeAlertTimeout;

function showAlert(message, type) {
  // Clear previous timmer
  clearTimeout(closeAlertTimeout);
  // Close previous alert
  $alert.classList.add("hidden");
  // Change message on the alert body
  $alertContent.innerHTML = `<span>${message}</span>`;
  // Check type to render the corresponding icon and bg color
  if (type === "error") {
    $alertType.innerHTML = $error;
    $alertType.style.backgroundColor = "rgba(255, 0, 0, 0.96)";
  } else if (type === "info") {
    $alertType.innerHTML = $info;
    $alertType.style.backgroundColor = "var(--primary-color)";
  } else {
    $alertType.innerHTML = $success;
    $alertType.style.backgroundColor = "rgba(20, 169, 79, 0.96)";
  }
  // Show new alert
  $alert.classList.remove("hidden");
  // Start new timmer
  closeAlertTimeout = setTimeout(() => {
    $alert.classList.add("hidden");
  }, 6000);
  // Add event to close button
  $closeAlertButton.addEventListener("click", function () {
    $alert.classList.add("hidden");
    clearTimeout(closeAlertTimeout);
  });
}

/* Utility functions */

/**
 *  Format number to currency
 * @param {number} price
 * @returns {string} $ 0,000.00
 */
function formatPrice(price) {
  // 1. Split price in two
  const text = price.toFixed(2).split(".");
  // 2. Keep decimal portion in "cents"
  const cents = text[1];
  // 3. Divide text[0] by 1000 to get the thousand part
  // and remove the decimal part with Math.floor()
  const thousands = Math.floor(Number(text[0] / 1000));
  // 4. Divide text[0] by 1000 and keep the rest in
  let hundreds = Number(text[0] % 1000);
  // 5. Check if thousands is greater than zero
  if (Number(thousands) > 0) {
    // If so, attach to first position of the string,
    // and assure that hundreds will have 3 digits (fill with 0 if necesary)
    return `$ ${thousands}.${hundreds.toFixed(0).padStart(3, "0")},${cents}`;
  } else {
    // If not, hundreds will be in the first position of the string.
    return `$ ${hundreds},${cents}`;
  }
}

function getMessage(stock) {
  if (stock === 0) {
    return `* Sin stock`;
  } else if (stock === 1) {
    return `* Queda una unidad`;
  } else {
    return `* Quedan ${stock} unidades`;
  }
}

/* Actualización del carrito global */
const $items = document.getElementById("cart-items_span");
const $subtotal = document.getElementById("cart-subtotal_span");
const $discount = document.getElementById("cart-discount_span");
const $total = document.getElementById("cart-total_span");
const $payment = document.getElementById("payment-method");
const $finishButton = document.getElementById("buy-button");

function updateCart(quantity, index) {
  cart.items += quantity;
  cart.subtotal += data[index].price * quantity;
  cart.discount += data[index].price * data[index].discount * quantity;
  cart.total = cart.subtotal - cart.discount;

  animateCartIcon(cart.items);

  $items.innerText = cart.items;
  $subtotal.innerText = formatPrice(cart.subtotal);
  $discount.innerText = formatPrice(cart.discount);
  $total.innerText = formatPrice(cart.total);
}

const $body = document.querySelector("body");
const $modal = document.querySelector("div.modal-mask");
const $modalClose = document.querySelector("div.modal-close button");
const $modalTotal = document.getElementById("modal-total_span");
const $modalPayment = document.getElementById("modal-payment_span");
const $modalItems = document.getElementById("modal-items_span");
const $modalSubtotal = document.getElementById("modal-subtotal_span");
const $modalDiscount = document.getElementById("modal-discount_span");

function showModal() {
  $modalTotal.innerText = formatPrice(cart.total);
  $modalPayment.innerText = PAYMENT_METHOD[cart.payment];
  $modalItems.innerText = cart.items;
  $modalSubtotal.innerText = formatPrice(cart.subtotal);
  $modalDiscount.innerText = formatPrice(cart.discount);
  $modal.style.display = "flex";
  $body.style.overflow = "hidden";
}

$modalClose.addEventListener("click", function () {
  $modal.style.display = "none";
  $body.style.overflow = "auto";

  // On modal close, clear the user cart
  cart.items = 0;
  cart.subtotal = 0;
  cart.discount = 0;
  cart.total = 0;
  cart.payment = "cash";

  $items.innerText = cart.items;
  $subtotal.innerText = formatPrice(cart.subtotal);
  $discount.innerText = formatPrice(cart.discount);
  $total.innerText = formatPrice(cart.total);
  // Return user to home page
  window.location.href = "../index.html";
});

function finishBuy() {
  cart.payment = $payment.value;
  if (cart.items === 0) {
    alert("El carrito esta vacio");
  } else {
    showModal();
  }
}

$finishButton.addEventListener("click", finishBuy);

/**
 * Create the HTML for the product card.
 * @param {Product} product
 * @param {number} index
 * @returns {HTMLElement}
 * Example:
 * <article class="product-card">
    <div class="product-card_image">
      <button>
        <img src="../assets/icons/heart.svg" alt="Icon Heart" />
      </button>
    </div>
    <div class="product-card_title">
      <p>La Malagueña</p>
      <h2>Aceitunas Descarozadas 160gr</h2>
    </div>
    <div class="product-card_cart">
      <div class="cart_price">
        <h3>$ 1.551,00</h3>
      </div>
      <div class="cart_buttons">
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </div>
    <div class="product-card_button"><button class="btn">Agregar</button></div>
    <div class="product-card_stock"><p>* Quedan 10 unidades</p></div>
  </article>
 */
function createCard(product, index) {
  // Parent container
  const $card = document.createElement("article");
  $card.classList.add("product-card");
  // ---------------------------------------------------------------------- //

  // First child.
  const $icon = document.createElement("img");
  $icon.setAttribute("src", "../assets/icons/heart.svg");
  $icon.setAttribute("alt", "Icon Heart");

  const $favButton = document.createElement("button");

  $favButton.addEventListener("click", function () {
    const src = $icon.src;
    if (src.includes("/assets/icons/heart.svg")) {
      $icon.setAttribute("src", "../assets/icons/heart-filled.svg");
      showAlert("Se ha agregado el producto a favoritos", "info");
    } else {
      $icon.setAttribute("src", "../assets/icons/heart.svg");
      showAlert("Se ha eliminado el producto de favoritos", "info");
    }
  });

  $favButton.appendChild($icon);

  const $cardImageContainer = document.createElement("div");

  if (product.onSale) {
    const $sale = document.createElement("span");
    $sale.appendChild(
      document.createTextNode(`${product.discount * 100}% OFF`)
    );
    $cardImageContainer.appendChild($sale);
  }

  $cardImageContainer.appendChild($favButton);
  $cardImageContainer.classList.add("product-card_image");
  $cardImageContainer.style.backgroundImage = `url("${product.imageUrl}")`;

  $card.appendChild($cardImageContainer);
  // ---------------------------------------------------------------------- //

  // Second child
  const $brand = document.createElement("p");
  $brand.appendChild(document.createTextNode(product.brand));

  const $title = document.createElement("h2");
  $title.appendChild(document.createTextNode(product.title));

  const $cardTitleContainer = document.createElement("div");
  $cardTitleContainer.classList.add("product-card_title");
  $cardTitleContainer.appendChild($brand);
  $cardTitleContainer.appendChild($title);

  $card.appendChild($cardTitleContainer);
  // ---------------------------------------------------------------------- //

  // Third child
  let previousPrice = product.price;
  let currentPrice = product.price;

  if (product.onSale) {
    currentPrice = product.price * (1 - product.discount);
  }

  const $previousPrice = document.createElement("del");
  $previousPrice.appendChild(
    document.createTextNode(formatPrice(previousPrice))
  );

  const $currentPrice = document.createElement("h3");
  $currentPrice.appendChild(document.createTextNode(formatPrice(currentPrice)));

  const $priceContainer = document.createElement("div");
  $priceContainer.classList.add("cart_price");

  if (product.onSale) {
    $priceContainer.appendChild($previousPrice);
  }

  $priceContainer.appendChild($currentPrice);

  const $qSpan = document.createElement("span");
  $qSpan.appendChild(document.createTextNode("0"));

  let items = Number($qSpan.innerText);

  const $removeButton = document.createElement("button");
  $removeButton.appendChild(document.createTextNode("-"));

  $removeButton.addEventListener("click", function () {
    if (items > 0) {
      items--;
    }
    $qSpan.innerText = items;
  });

  const $addButton = document.createElement("button");
  $addButton.appendChild(document.createTextNode("+"));

  $addButton.addEventListener("click", function () {
    if (items < 50) {
      items++;
    }
    $qSpan.innerText = items;
  });

  const $buttonCartContainer = document.createElement("div");
  $buttonCartContainer.classList.add("cart_buttons");
  $buttonCartContainer.appendChild($removeButton);
  $buttonCartContainer.appendChild($qSpan);
  $buttonCartContainer.appendChild($addButton);

  const $cardCartContainer = document.createElement("div");
  $cardCartContainer.classList.add("product-card_cart");
  $cardCartContainer.appendChild($priceContainer);
  $cardCartContainer.appendChild($buttonCartContainer);

  $card.appendChild($cardCartContainer);
  // ---------------------------------------------------------------------- //

  // Fourth child
  const $addToCartButton = document.createElement("button");
  $addToCartButton.appendChild(document.createTextNode("Agregar"));
  $addToCartButton.classList.add("btn");

  $addToCartButton.addEventListener("click", function () {
    if (items === 0) {
      alert("Debes elegir una cantidad mayor a 0.");
      return;
    }

    if (items > product.stock) {
      showAlert("No contamos con stock suficiente", "error");
    } else {
      // Actualizar stock global
      data[index].stock -= items;
      // Actualizar html stock
      $message.innerText = getMessage(product.stock);
      // Actualizar carrito
      updateCart(items, index);
      showAlert("Se agregó el producto correctamente", "success");
    }
    // Actualizar HTML de unidades
    items = 0;
    $qSpan.innerText = items;
  });

  const $cardButtonContainer = document.createElement("div");
  $cardButtonContainer.classList.add("product-card_button");
  $cardButtonContainer.appendChild($addToCartButton);

  $card.appendChild($cardButtonContainer);
  // ---------------------------------------------------------------------- //

  // Fifth child
  const message = getMessage(product.stock);
  const $message = document.createElement("p");
  $message.appendChild(document.createTextNode(message));

  const $cardStockContainer = document.createElement("div");
  $cardStockContainer.classList.add("product-card_stock");
  $cardStockContainer.appendChild($message);
  $card.appendChild($cardStockContainer);
  // ---------------------------------------------------------------------- //

  // Return HTML Element
  return $card;
}

/**
 * Append every product card to parent container
 * @param {Product[]} products
 * @param {HTMLElement} element
 * @returns {void}
 */
function loadProducts(products, element) {
  for (let i = 0; i < products.length; i++) {
    element.appendChild(createCard(products[i], i));
  }
}

// Global DOM Elements
const $productSection = document.querySelector(".product-section");

loadProducts(data, $productSection);
