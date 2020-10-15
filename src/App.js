import React, { Component } from "react";
import Search from "./components/Search";
import Container from "./components/Container";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      buttonClicked: false,
      error: false,
      weathers: []
    }
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(value) {
    this.setState({
      buttonClicked: false,
      value
    });

  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&cnt=8&units=metric&appid=69d4aa804f2d9e2707e451f59527fed8`)
    .then(response => {
      if (response.status >= 200 && response.status <=299){
        return response.json();
      }
      else {
        throw Error(response.statusText);
      }
    })

    .then(data => {
      this.setState({
        buttonClicked: true,
        error: false,
        weathers: data
      })
    })

    .catch(error => {
      this.setState({
        buttonClicked: true,
        error: true
      })
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Search handleInput={this.handleInput} />
        <Container 
          buttonClicked={this.state.buttonClicked}
          weathers={this.state.weathers.list}
          error={this.state.error}
        />
      </div>
      )
  }
} 
export default App
