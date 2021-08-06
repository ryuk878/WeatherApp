
import React from "react";
import WeatherCard from "./WeatherCard";


export default function Weatheroverview() {
// Return all data & html files
    return (    
        
      <div className="App">
      
        <WeatherCard city ="Amsterdam" lat="52.4172500216" long="4.883590"  />
        <WeatherCard city="Eindhoven" lat="51.441642" long="5.4697225" />
        
      </div>
    );
  }


