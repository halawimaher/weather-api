import React, { Component } from "react";
import { render } from "react-dom";

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


export default class WeatherItem extends Component {
  state = {
    images: [clear, cloudy, drizzle, fog, mostlycloudy, partlycloudy, rain, snow, storm, unknown]
  };

  

  render() {
    return (
      <div className="weather-now">
        <img src="./clear.svg" alt="cloudy" width="150px" height="150px"></img>
        <h5>clear skies</h5>
        <h4>Temperature 10&#8451; to 11&#8451;</h4>
      </div>);
  }
}

