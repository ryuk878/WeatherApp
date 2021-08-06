import React from "react";
import { Accordion as OnzeAccordion } from "./accordion";
import weatherBackground from "../Image/Amsterdam.jpg";

export default function WeatherCardBackHtml({ weatherData }) {

const date = weatherData.daily[0].dt * 1000
  const dayInMillis = 24 * 60 * 60 * 1000;
  const weekDays = Array(7)
    .fill()
    .map((x, index) => index)
    .map((index) => new Date(date + (dayInMillis * index)));
  return (

    <div className="weatherCard">
      {" "}
      <img
        className="background-img"
        src={weatherBackground}
        alt="background"
      ></img>
      <div className="dropdown">
        <div className="dropdown-content">
          <div className="wrapper Amsterdam" id="third">
            {weekDays.map((date, index) => (
              <OnzeAccordion
                key={index}
                followingDay={date}
                daily={weatherData.daily[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
