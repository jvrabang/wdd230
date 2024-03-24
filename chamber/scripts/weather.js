// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-description');
const currentWeatherIcon = document.querySelector('#current-weather-icon');
const forecastContainer = document.querySelector('#forecast');

const apiKey = '962223aded989101ef9bc26b7710df54';
const lat = '17.570562576854336';
const lon = '120.38653719716343';
const units = 'metric';

// Fetch current weather and forecast data
async function fetchData() {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    try {
        const [currentResponse, forecastResponse] = await Promise.all([fetch(currentWeatherUrl), fetch(forecastUrl)]);

        if (currentResponse.ok && forecastResponse.ok) {
            const currentData = await currentResponse.json();
            const forecastData = await forecastResponse.json();
            
            displayCurrentWeather(currentData);
            displayForecast(forecastData);
        } else {
            throw Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display current weather data
function displayCurrentWeather(data) {
    currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDesc.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    currentWeatherIcon.innerHTML = `<img src="${iconUrl}" alt="Current Weather Icon">`;
}

// Display forecast data
function displayForecast(data) {
    const forecastList = data.list.filter((item, index) => index % 8 === 0); // Filter to get data for every 24 hours (3-hour interval)
    const forecastBody = document.getElementById('forecast-body');
    forecastBody.innerHTML = ''; // Clear previous forecast data

    // Create the table row for days as column headers
    const headerRow = document.createElement('tr');

    // Iterate through each day to create column headers
    const next3Days = forecastList.slice(1, 4); // Select only the next 3 days
    next3Days.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dayCell = document.createElement('th');
        dayCell.textContent = day;
        headerRow.appendChild(dayCell);
    });

    // Append the header row to the forecast table body
    forecastBody.appendChild(headerRow);

    // Create a row for weather data
    const weatherRow = document.createElement('tr');

    // Iterate through each day to populate weather data
    next3Days.forEach(item => {
        const temp = Math.round(item.main.temp);
        const weather = item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1);
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        // Create a table cell for weather data
        const weatherCell = document.createElement('td');
        weatherCell.innerHTML = `<img src="${iconUrl}" alt="Weather Icon"><br>${temp}°C - ${weather}`;
        weatherRow.appendChild(weatherCell);
    });

    // Append the weather row to the forecast table body
    forecastBody.appendChild(weatherRow);
}

// Fetch data on page load
fetchData();
