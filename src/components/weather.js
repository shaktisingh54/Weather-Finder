import React, { Component } from 'react';

import "../style.css";

class Weather extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "container">
                { this.props.city && this.props.country && <p>Location : { this.props.city }, { this.props.country }</p> }
                { this.props.temperature && <p>Temperature : { this.props.temperature } </p> }
                { this.props.humidity && <p>humidity : { this.props.humidity } </p> }
                { this.props.description && <p>description : { this.props.description } </p> }
                { this.props.error && <p>{ this.props.error }</p> }
            </div>
         );
    }
}
 
export default Weather;