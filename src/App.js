import React, { Component } from "react";
import Search from "./components/Search";
import fake from "./fakeWeatherData.json";
import "./App.css";
import WeatherItem from "./components/WeatherItem";
import Weather24 from "./components/Weather24";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "London"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };
  
  render() {
    let fakes = fake.list.slice(20,26).map(obj => {
    return obj
    })

    return (
      <div className="app">
        <Search />
        <WeatherItem fakes={fakes} />
        <Weather24 fakes={fakes}/>
      </div>
      );
  }
}  
export default App;
