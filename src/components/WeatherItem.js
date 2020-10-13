import React, { Component } from "react";
import { render } from "react-dom";

import clear from "../img/weather-icons/clear.svg";


export default class WeatherItem extends Component {
  render() {
    return <div>Heello</div>;
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
        Hello {this.props.name}
      </div>
    );
  }
}
