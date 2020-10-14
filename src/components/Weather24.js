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

class Weather24 extends React.Component {
state = {
    input: ""
  };
getimg(id){
    if(id <= 300){
      return storm
    }if (id > 300 && id <= 499){
      return drizzle;
    }if(id >= 500 && id <= 599){
      return rain
    }if(id >= 600 && id <= 699){
      return snow
    }if(id === 800){
      return clear
    }if(id <= 801 && id <= 805){
      return mostlycloudy
    }
}  

render() {
let selector = this.props.fakes;
  
return (
    <section className="Weather24">
    <div className="details">
        <ul>
            {selector.map((item, key)=>  
            <li key={key} className="Weather24">
            <time>{new Date(item.dt_txt).getHours().toString().padStart(2, '0')+":00"}</time>
            <img src={this.getimg(item.weather[0].id)} alt={this.getimg(item.weather[0].main.description)} height="50px;" width="50px;" />
            {Math.round(item.main.temp-273.15)}&#176;
            </li>
        )}
        </ul>
    </div>
    </section>
    );  
}

}

export default Weather24;