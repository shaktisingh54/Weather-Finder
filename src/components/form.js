import React, { Component } from 'react';

import "../style.css";

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "container">
                <h1>Weather Finder</h1>
                <form onSubmit = { this.props.getWeather }>
                    <input type = "text" name = "city" placeholder = "City..."/>
                    <input type = "text" name = "country" placeholder = "Country..."/>
                    <button>Get Weather</button>
                </form>
            </div>
         );
    }
}
 
export default Form;