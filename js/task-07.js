// Pobranie elementów z HTML
var fontSizeControl = document.getElementById("font-size-control");
var textSpan = document.getElementById("text");

// Funkcja aktualizująca rozmiar tekstu
function updateFontSize() {
  var fontSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = fontSize;
}

// Nasłuchiwanie zdarzenia input na elemencie input
fontSizeControl.addEventListener("input", updateFontSize);
