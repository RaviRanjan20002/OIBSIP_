import React, { useState } from 'react';

function TemperatureConverter() {
  const [inputTemp, setInputTemp] = useState('');
  const [inputUnit, setInputUnit] = useState('celsius');
  const [outputTemp, setOutputTemp] = useState('');

  const handleInputChange = (event) => {
    setInputTemp(event.target.value);
  };

  const handleUnitChange = (event) => {
    setInputUnit(event.target.value);
  };

  const handleConvertClick = () => {
    if (isNaN(inputTemp)) {
      alert('Please enter a valid temperature!');
      return;
    }

    const temp = parseFloat(inputTemp);

    if (inputUnit === 'celsius') {
      setOutputTemp(((temp * 9) / 5 + 32).toFixed(2) + ' °F');
    } else if (inputUnit === 'fahrenheit') {
      setOutputTemp(((temp - 32) * (5 / 9)).toFixed(2) + ' °C');
    } else {
      // Kelvin conversion
      setOutputTemp((temp - 273.15).toFixed(2) + ' °C');
    }
  };

  return (
    <div class="container">
      <h2>TEMPERATURE CONVERTER</h2>
      <label>
        Temperature:
        <input type="text" value={inputTemp} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Unit:
        <select value={inputUnit} onChange={handleUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </label>
      <br />
      <button onClick={handleConvertClick}>Convert</button>
      <br />
      <label class="output">Converted Temperature: {outputTemp}</label>
    </div>
  );
}

export default TemperatureConverter;
