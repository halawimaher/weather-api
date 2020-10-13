import React from "react";

import clear from "../img/weather-icons/clear.svg";

import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        <div>
          {this.state.input}
          <input
            type="text"
            id="input-name"
            placeholder="type in city name"
            onChange={event => {
              this.setState({ input: event.target.value });
            }}
          />
          <button
            onClick={event => {
              this.props.handleInput(this.state.input);
            }}
          >
            Find Weather
          </button>
        </div>
      </div>
    );
  }
}
export default Search;
