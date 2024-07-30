const $favButtons = document.querySelectorAll("div.product-card_image button");
const $favIcons = document.querySelectorAll("img.fav-icon");

for (let i = 0; i < $favButtons.length; i++) {
  $favButtons[i].addEventListener("click", function () {
    const src = $favIcons[i].src;
    if (src.includes("/assets/icons/heart.svg")) {
      $favIcons[i].setAttribute("src", "../assets/icons/heart-filled.svg");
    } else {
      $favIcons[i].setAttribute("src", "../assets/icons/heart.svg");
    }
  });
}
