import React, { useEffect, useState } from "react";
import WeatherBack from "./WeatherCardBack";
import WeatherFront from "./WeatherCardFront";
import ReactCardFlip from "react-card-flip"
;

export default function WeatherCard({ lat, long, city }) {
  // two set states for front and back data , 1 for onClick show or hide

  const [backData, setDataBack] = useState([]);
  const [frontData, setDataFront] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  // Fetching two API's
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setDataBack(result);
        console.log(result);
      });
  }, [lat, long]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&lang=nl&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setDataFront(result);
        console.log(result);
      });
  }, [city]);

  // Return HTML + data  if data is correct
  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedFrontToBack="1"
        flipSpeedBackToFront="1"
      >
        <div>
          {typeof frontData.main != "undefined" ? (
            <WeatherFront weatherData={frontData} />
          ) : (
            <div>API BLOCKED</div>
          )}
          <button className="front-flip-button" onClick={handleClick}>Weer 7 dagen</button>
        </div>

        <div>
          
          {typeof backData.daily != "undefined" ? (
            <WeatherBack weatherData={backData} />
          ) : (
            <div>API BLOCKED</div>
          )}
          <button className="front-flip-button" onClick={handleClick}>Weer vandaag</button>
        </div>
      </ReactCardFlip>
    </>
  );
}
