import React, { Component } from "react";

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      value: ""
    }
  }

  render() {
    return (
      <div className="search">
        <div className="app__header">
          <input
            type="text"
            id="input-name"
            placeholder="type in city name"
            onChange={event => {
              this.setState({ value: event.target.value })
            }}
          />
          <button
            onClick={event => {
              this.props.handleInput(this.state.value);
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
