function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let temperature = parseFloat(temperatureInput);

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    let result;
    let resultUnit;

    switch (unit) {
        case 'C':
            // Celsius to Fahrenheit and Kelvin
            result = {
                Fahrenheit: (temperature * 9 / 5) + 32,
                Kelvin: temperature + 273.15
            };
            resultUnit = 'C';
            break;
        case 'F':
            // Fahrenheit to Celsius and Kelvin
            result = {
                Celsius: (temperature - 32) * 5 / 9,
                Kelvin: (temperature - 32) * 5 / 9 + 273.15
            };
            resultUnit = 'F';
            break;
        case 'K':
            // Kelvin to Celsius and Fahrenheit
            result = {
                Celsius: temperature - 273.15,
                Fahrenheit: (temperature - 273.15) * 9 / 5 + 32
            };
            resultUnit = 'K';
            break;
        default:
            document.getElementById('result').innerText = 'Invalid unit selected.';
            return;
    }

    document.getElementById('result').innerHTML = `
        Converted Temperature:<br>
        Celsius: ${result.Celsius ? result.Celsius.toFixed(2) + ' °C' : 'N/A'}<br>
        Fahrenheit: ${result.Fahrenheit ? result.Fahrenheit.toFixed(2) + ' °F' : 'N/A'}<br>
        Kelvin: ${result.Kelvin ? result.Kelvin.toFixed(2) + ' K' : 'N/A'}
    `;
}
document.getElementById('showButton').addEventListener('click', function() {
    const result = document.getElementById('result');
    if (result.style.display === 'none') {
        result.style.display = 'block';
    } else {
        result.style.display = 'block'; 
    }
});