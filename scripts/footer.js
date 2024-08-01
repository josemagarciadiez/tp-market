const $botonSuscribir = document.getElementById("button-suscription");
const $inputEmail = document.getElementById("email-suscription");

$botonSuscribir.addEventListener("click", function (e) {
  e.preventDefault();
  const email = $inputEmail.value;
  if (!email) {
    alert("Debes ingresesar tu email.");
    return;
  }
  alert(
    `Te has suscrito correctamente a nuestro newletter con el correo: ${email}`
  );

  $inputEmail.value = "";
});
