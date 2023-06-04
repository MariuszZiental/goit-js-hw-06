// Pobranie formularza z HTML
const loginForm = document.querySelector(".login-form");

// Obsługa zdarzenia submit formularza
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Zapobieganie domyślnej akcji formularza (odświeżenie strony)

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Sprawdzenie, czy pola są uzupełnione
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Wypełnij wszystkie pola formularza.");
  } else {
    // Utworzenie obiektu z wartościami formularza
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Wyświetlenie obiektu z wartościami formularza w konsoli
    console.log(formData);

    // Wyczyszczenie wartości pól formularza
    loginForm.reset();
  }
});
