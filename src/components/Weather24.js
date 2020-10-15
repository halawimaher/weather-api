import React from 'react'
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
export default function Weather24(props) {
    const id = props.weather.id
    let images;
    if (id < 300) {
        images = storm
    }
    else if (id < 500) {
        images = drizzle
    }
    else if (id < 600) {
        images = rain
    }
    else if (id < 700) {
        images = snow
    }
    else if (id < 800) {
        images = fog
    }
    else if (id === 800) {
        images = clear
    }
    else if (id === 801) {
        images = partlycloudy
    }
    else if (id < 806) {
        images = mostlycloudy
    }
    else {
        images = unknown
    }
    return (
        <div>
            <ol>
            <li><img alt="main" src={images} width="150px" height="150px" /></li>
            <li><h4>{props.weather.description}</h4></li>
            <li>
                <span>Temperature  </span>
                <span className="props">{props.weather.main.temp_min}&deg;C</span> to   <span className="props">{props.weather.main.temp_max}&deg;C</span>
            </li>
            <li>
                <span>Humidity   </span> 
                <span className="props">{props.weather.main.humidity}%   </span> 
                <span>Pressure   </span>  
                <span className="props">{props.weather.main.pressure}</span></li>
            </ol>
        </div>
    )
}