// Pobranie elementów z HTML
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Funkcja aktualizująca rozmiar tekstu
function updateFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = fontSize;
}

// Nasłuchiwanie zdarzenia input na elemencie input
fontSizeControl.addEventListener("input", updateFontSize);
