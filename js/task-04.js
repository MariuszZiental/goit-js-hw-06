var decrementButton = document.querySelector('[data-action="decrement"]');
var incrementButton = document.querySelector('[data-action="increment"]');
var counterValueElement = document.getElementById("value");

// Inicjalizacja wartości licznika
var counterValue = 0;

// Aktualizacja interfejsu wartości licznika
function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

// Obsługa kliknięcia przycisku "Zmniejsz"
decrementButton.addEventListener("click", function () {
  counterValue -= 1;
  updateCounterValue();
});

// Obsługa kliknięcia przycisku "Zwiększ"
incrementButton.addEventListener("click", function () {
  counterValue += 1;
  updateCounterValue();
});

// Inicjalizacja wartości licznika na interfejsie
updateCounterValue();
