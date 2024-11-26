const cityInput = document.getElementById("city-input");
const cityDisplay = document.getElementById("display-city");
const tempDisplay = document.getElementById("display-temp");

async function searchCity() {
  const city = cityInput.value;

  // sending get req to given api
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/2024-11-26?key=MA85H3QBHK3FGLU79LG3XRJM7`
  );

  // parsing json to js object
  const res = await data.json();

  cityDisplay.innerHTML = res.resolvedAddress;
  tempDisplay.innerHTML = res.currentConditions.temp;

  //   res.days[0].description;
}
