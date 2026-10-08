function convertTemperature() {
    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a temperature.";
        return;
    }

    let celsius;

    // Convert the input temperature to Celsius
    if (fromUnit === "celsius") {
        celsius = temperature;
    } else if (fromUnit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else if (fromUnit === "kelvin") {
        celsius = temperature - 273.15;
    }

    let convertedTemperature;

    // Convert Celsius to the selected unit
    if (toUnit === "celsius") {
        convertedTemperature = celsius;
    } else if (toUnit === "fahrenheit") {
        convertedTemperature = (celsius * 9 / 5) + 32;
    } else if (toUnit === "kelvin") {
        convertedTemperature = celsius + 273.15;
    }

    const symbols = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    };

    result.textContent =
        `${convertedTemperature.toFixed(2)} ${symbols[toUnit]}`;
}
