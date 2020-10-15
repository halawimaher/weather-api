import React, { Component } from "react";
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


class WeatherItem extends Component {
  constructor(props){
    super(props);
    this.setState = {}
  }

  render() {
    const Hours = this.props.weather.map(weather =>{
      const id = weather.weather[0].id
      let image;
      if (id < 300) {
        image = storm
      }
      else if (id < 500){
          image = drizzle
      }
      else if (id < 600){
          image = rain
      }
      else if (id < 700){
          image = snow
      }
      else if (id < 800){
          image = fog
      }
      else if (id === 800){
          image = clear
      }
      else if (id === 801){
          image = partlycloudy
      }
      else if (id < 806){
          image = mostlycloudy
      }
      else{
          image = unknown
      }
      return (
        <div className="weather-now">
          <ul>
          <li>{weather.dt_txt.substr(11, 5)}</li>
          <li><img src={image} alt="qwe" width="50px" height="50px"/></li>
          <li>{Math.floor(weather.main.temp)}&deg;C</li>
          </ul>
        </div>
      )
    })
    return (
      <div>
        {Hours}
      </div>
    );
  }
}
export default WeatherItem;
