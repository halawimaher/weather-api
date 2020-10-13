import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Maher"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div className="app__main">
          <Search handleInput={this.handleInputChange} />
        </div>
        <div className="main-component">
          {/*<SayHi />*/}
          {/*<SayHello color="black" name={this.state.name} />*/}
          <img src="./clear.svg" alt="cloudy" width="150px" height="150px"></img>
          <h5>clear skies</h5>
          <h4>Temperature 10&#8451; to 11&#8451;</h4>
          <ol>
            <li>Humidity</li>
            <li>78%</li>
            <li>Pressure</li>
            <li>1008.48</li>
          </ol>
        <div className="details">
            <div className="times">
              <ul>
                <li>03:00</li>
                <li>06:00</li>
                <li>09:00</li>
                <li>12:00</li>
                <li>15:00</li>
                <li>18:00</li>
                <li>21:00</li>
              </ul>
            </div>
             <div className="images">
                <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
                <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
                <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
                <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
                <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
                <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
                <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
            </div>
            <div className="temperatures">
              <ul>
                <li>8&#8451;</li>
                <li>9&#8451;</li>
                <li>14&#8451;</li>
                <li>17&#8451;</li>
                <li>18&#8451;</li>
                <li>16&#8451;</li>
                <li>13&#8451;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
