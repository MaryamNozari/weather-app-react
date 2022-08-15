import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a19149d935a95bd92d19c439727ab1de&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row mt-3">
        <div className="col-9">
          <input
            type="search"
            placeholder="type a city ..."
            className="form-control"
            onChange={changeCity}
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
  if (loaded)
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=a19149d935a95bd92d19c439727ab1de&units=metric`;
    axios.get(url).then(displayWeather);
    return "Loading...";
  }
}
