function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Pobranie elementów z HTML
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Obsługa zdarzenia click na przycisku
changeColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  // Zmiana koloru tła body
  document.body.style.backgroundColor = randomColor;

  // Aktualizacja tekstu w elemencie span.color
  colorSpan.textContent = randomColor;
});
