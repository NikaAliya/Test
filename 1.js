const convertButton = document.getElementById("convertButton");

function convertTemperature() {
  const celsiusInput = document.getElementById("celsiusInput");
  const outputDiv = document.getElementById("output");

  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    outputDiv.innerHTML = "Prašome įvesti skaičių.";
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  outputDiv.innerHTML = "Farenheitai: " + fahrenheit.toFixed(2) + " °F<br>" +
                        "Kelvinai: " + kelvin.toFixed(2) + " K";
}

convertButton.addEventListener("click", convertTemperature);
