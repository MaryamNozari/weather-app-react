import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          Description: {props.data.description}
        </li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              {" "}
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span className="wind">{props.data.wind}km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
