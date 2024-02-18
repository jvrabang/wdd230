document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById('temperature');
    const windspeedInput = document.getElementById('windspeed');
    const calculateButton = document.getElementById('calculate');
    const resultDisplay = document.getElementById('windchill-result');

    calculateButton.addEventListener('click', function() {
        const temperature = parseFloat(temperatureInput.value);
        const windspeed = parseFloat(windspeedInput.value);

        if (isValidInput(temperature, windspeed)) {
            const windChill = calculateWindChill(temperature, windspeed);
            resultDisplay.textContent = `Wind Chill: ${windChill.toFixed(2)}°C`;
        } else {
            resultDisplay.textContent = 'N/A';
        }
    });

    function isValidInput(temperature, windspeed) {
        // Check if temperature is <= 10°C (50°F) and windspeed is > 4.8 km/h (3.0 mph)
        return temperature <= 10 && windspeed > 4.8;
    }

    function calculateWindChill(temperature, windspeed) {
        return 13.12 + ( 0.6215 * temperature ) - ( 11.37 * Math.pow(windspeed, 0.16)) + (0.3965 * temperature * Math.pow(windspeed, 0.16));
    }
});
