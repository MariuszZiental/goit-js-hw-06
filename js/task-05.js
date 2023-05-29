// Pobranie elementów z HTML
var nameInput = document.getElementById("name-input");
var nameOutput = document.getElementById("name-output");

// Funkcja aktualizująca zawartość spana na podstawie wartości pola input
function updateNameOutput() {
  var inputValue = nameInput.value;
  nameOutput.textContent = inputValue ? inputValue : "Anonymous";
}

// Nasłuchiwanie zdarzenia input na polu input
nameInput.addEventListener("input", updateNameOutput);
