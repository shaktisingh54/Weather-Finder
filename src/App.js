import React, { Component } from 'react';

import Form from "./components/form";
import Weather from "./components/weather";

import "./style.css";

const API_KEY = "5b2bdf6cd142cc6c9398e58bfec1a543";

class App extends Component {

    state = {
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : undefined
    }
    
    getWeather = async (e) => {

        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if( city && country) {
            console.log(data);
            this.setState ({
            temperature : data.main.temp,
            city : data.name,
            country : data.sys.country,
            humidity : data.main.humidity,
            description : data.weather[0].description,
            error : ""
        });
        } else {
            this.setState({
                temperature : undefined,
                city : undefined,
                country : undefined,
                humidity : undefined,
                description : undefined,
                error : "Please Enter The Values"
            });
        }
        
    }

    render() { 
        return ( 
            <div>
                <div>
                    <Form getWeather = { this.getWeather }/>
                    <Weather 
                        temperature = { this.state.temperature }
                        city = { this.state.city }
                        country = { this.state.country }
                        humidity = { this.state.humidity }
                        description = { this.state.description }
                        error = { this.state.error}
                    />
                </div>                
            </div>
         );
    }
}
 
export default App;

                
               