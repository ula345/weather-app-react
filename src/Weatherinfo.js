import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WetaherInfo(props) { 
    return (  
         <div className="WeatherInfo"> 
         <h1>{props.data.city}</h1>
   <ul> 
     <li> <FormattedDate date={props.data.date}/> </li></ul>
    
<div className="row">
    <div className="col-6"> 
      <img src=
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/unknown-weather-4127335-3425639.png" alt="Partially sunny"/>
    
    <WeatherTemperature celsius={props.data.temperature} /> </div>
     <div className="col-6">  
       
        <ul>
        
            <li> {props.data.description}</li>
          <li> Humidity: {props.data.humidity} %</li>
          <li> Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div> 
    </div>);
}