import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather () { 
  const [WeatherData, setWeatherData] = useState({ready: false});

function handleResponse(response) { 
console.log(response.data);
setWeatherData({
  ready: true,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
wind: response.data.wind.speed,
city: response.data.name,
date: "Wednesday 07:00"
});

if (WeatherData.ready) {
    return( 
        <div className="Weather"> 
      <form>
    <div className="row"> 
             <div className="col-9">
      <input type="search" placeholder="Enter a city.." className="formSubmit" autoFocus="on"/>
      <div className="col-3"> 
      <input type="Submit" className="btn btn-primary w-100" value="Search" />
      </div>
      </div> 
      </div>
    </form>


   <h1> {WeatherData.city}</h1>
    
<div className="row">
    <div className="col-6"> 
      <img src=
      "htt}ps://cdn.iconscout.com/icon/premium/png-256-thumb/unknown-weather-4127335-3425639.png" alt="Partially sunny"/>
    
  <span className="temperature">{Math.round(WeatherData.temperature)}</span> 
  <span className="unit">°C</span>   </div>
     <div className="col-6">  
       <h2> {WeatherData.date}</h2>
        <ul>
        
            <li> {WeatherData.description}</li>
          <li> Humidity: {WeatherData.humidity} %</li>
          <li> Wind: {WeatherData.wind} km/h</li>
        </ul>
      </div>
    </div> 
            </div>
    );
} 

else {

const apiKey = "c3eaadab98311afcd7db046c4c4d8248";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}
}}