// Pobranie elementu z HTML
const validationInput = document.getElementById("validation-input");

// Funkcja sprawdzająca poprawność wprowadzonej wartości
function validateInput() {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValue = validationInput.value.trim();

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
