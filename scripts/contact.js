const $sendButton = document.getElementById("button-send");
const $contactForm = document.querySelector("form.contact-form");

const $name = document.getElementById("input-name");
const $lastname = document.getElementById("input-lastname");
const $email = document.getElementById("input-email");
const $telephone = document.getElementById("input-tel");
const $message = document.getElementById("input-message");

let info = [];

$contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  info[0] = $name.value;
  info[1] = $lastname.value;
  info[2] = $email.value;
  info[3] = $telephone.value;
  info[4] = $message.value;

  if (!info[0] || !info[1] || !info[2]) {
    alert("Debes completar los datos requeridos.");
    return;
  }

  const blob = new Blob([info], { type: "text/plain;charset=utf-8" });
  // Libreria FileSaver.js
  saveAs(blob, "consulta.txt");

  // Reseteo el form
  $name.value = "";
  $lastname.value = "";
  $email.value = "";
  $telephone.value = "";
  $message.value = "";
});
