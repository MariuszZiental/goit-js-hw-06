// Pobranie elementów z HTML
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Funkcja aktualizująca zawartość spana na podstawie wartości pola input
function updateNameOutput() {
  const inputValue = nameInput.value;
  nameOutput.textContent = inputValue ? inputValue : "Anonymous";
}

// Nasłuchiwanie zdarzenia input na polu input
nameInput.addEventListener("input", updateNameOutput);
