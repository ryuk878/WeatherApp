import React from "react";
import Moment from "./moment";
import weatherBackground from "../Image/Amsterdam.jpg";

export default function WeatherCardFrontHtml({ weatherData }) {
  return (
    <div className="weatherCard">
      <img
        className="background-img"
        src={weatherBackground}
        alt="background"
      ></img>

      <div className="innertext">
        <h1 className="title">{weatherData.name}</h1>
        <br></br>
        <Moment />
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
          alt="icon"
        />
        <div className="graden"> {weatherData.main.temp.toFixed(1)} C° </div>
        <div className="innerbox">
          <p>Gevoelstempratuur: {weatherData.main.feels_like.toFixed(1)}C° </p>
          <p>Min temp: {weatherData.main.temp_min.toFixed(1)}C°</p>
          <p>Max temp: {weatherData.main.temp_max.toFixed(1)}C°</p>
          <p>Luchtvochtigheid: {weatherData.main.humidity}%</p>
          <p> {weatherData.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}
