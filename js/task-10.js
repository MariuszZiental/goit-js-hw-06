// Pobranie elementów z HTML
var input = document.querySelector('input[type="number"]');
var createButton = document.querySelector("button[data-create]");
var destroyButton = document.querySelector("button[data-destroy]");
var boxesContainer = document.getElementById("boxes");

// Funkcja do generowania losowego koloru w formacie HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Funkcja do tworzenia kolekcji elementów
function createBoxes(amount) {
  // Usunięcie istniejących elementów
  destroyBoxes();

  var size = 30;

  for (var i = 0; i < amount; i++) {
    var box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + "px";
    box.style.height = size + "px";
    boxesContainer.appendChild(box);
    size += 10;
  }
}

// Funkcja do usuwania kolekcji elementów
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Obsługa zdarzenia click na przycisku Utwórz
createButton.addEventListener("click", function () {
  var amount = input.value;
  createBoxes(amount);
});

// Obsługa zdarzenia click na przycisku Usuń
destroyButton.addEventListener("click", destroyBoxes);
