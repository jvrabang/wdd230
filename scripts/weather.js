// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather';

// Define latitude and longitude of Vigan City
const lat = '17.570562576854336';
const lon = '120.38653719716343';
const units = 'metric';
const apiKey = '962223aded989101ef9bc26b7710df54';

// Construct query string
const queryString = `?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url + queryString);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  // Display weather icon
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);

  // Display current temperature
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

  // Display weather description
  let desc = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  captionDesc.textContent = desc;
}