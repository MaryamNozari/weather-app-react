import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>

        <span classsName="unit">
          °C |{""}
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div classsName="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit)}</span>

        <span classsName="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |{""}
          °F
        </span>
      </div>
    );
  }
}
