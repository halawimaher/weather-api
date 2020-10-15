import React, { Component } from 'react';
import WeatherItem from './WeatherItem';
import Weather24 from './Weather24';

class Container extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        if (this.props.buttonClicked){
            if (this.props.error){
                return <h1>City was not found</h1>
            }
            else{
                let result = [];
                this.props.weathers.forEach(item => {
                    let currentDate = new Date();
                    let currentTime = new Date(item.dt_txt);
                    result.push({
                        main: item.main,
                        id: item.weather[0].id,
                        diff: Math.abs(currentDate - currentTime),
                        description: item.weather[0].description
                    })
                })
                let object = result[0];
                result.forEach(item => {
                    if (item.diff <= object.diff){
                        object = item
                    }
                })
                return (
                    <div className="app__main">
                        <div className="container">
                            <Weather24 weather={object}/>
                        </div>
                        <div>
                            <WeatherItem weather={this.props.weathers}/>
                        </div>
                    </div>
                ) 
            }
        }
        return(
            <div></div>
        )
    }
}
export default Container