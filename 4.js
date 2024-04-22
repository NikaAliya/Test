fetch("./countries.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    renderCountries(data);
  })
  .catch(error => {
    console.error("There was a problem fetching the data:", error);
  });

function renderCountries(countries) {
  const container = document.getElementById("countries-container");
  countries.forEach(country => {
    const card = document.createElement("div");
    card.classList.add("country-card");
    const countryName = document.createElement("h2");
    countryName.textContent = country.country;
    const exportsList = document.createElement("ul");
    country.exports.forEach(exportItem => {
      const exportItemElement = document.createElement("li");
      exportItemElement.textContent = exportItem;
      exportsList.appendChild(exportItemElement);
    });
    card.appendChild(countryName);
    card.appendChild(exportsList);
    container.appendChild(card);
  });
}
