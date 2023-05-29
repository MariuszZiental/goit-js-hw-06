// Pobranie elementu z HTML
var validationInput = document.getElementById("validation-input");

// Funkcja sprawdzająca poprawność wprowadzonej wartości
function validateInput() {
  var expectedLength = parseInt(validationInput.getAttribute("data-length"));
  var inputValue = validationInput.value.trim();

  if (inputValue.length === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

// Nasłuchiwanie zdarzenia blur na polu input
validationInput.addEventListener("blur", validateInput);
