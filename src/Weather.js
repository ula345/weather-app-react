import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather (props) { 
  const [weatherData, setWeatherData] = useState({ready: false});
function handleResponse(response) { 
  setWeatherData({
ready:true,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
wind: response.data.wind.speed,
city: response.data.name,
date: new Date (response.data.dt * 1000)
});}

if (weatherData.ready) {
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


   <h1> {weatherData.city}</h1>
   <ul> 
     <li> <FormattedDate date={weatherData.date}/> </li></ul>
    
<div className="row">
    <div className="col-6"> 
      <img src=
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/unknown-weather-4127335-3425639.png" alt="Partially sunny"/>
    
  <span className="temperature">{Math.round(weatherData.temperature)}</span> 
  <span className="unit">°C</span>   </div>
     <div className="col-6">  
       <h2> {weatherData.date}</h2>
        <ul>
        
            <li> {weatherData.description}</li>
          <li> Humidity: {weatherData.humidity} %</li>
          <li> Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
    </div> 
            </div>
    );
} 

else {

const apiKey = "c3eaadab98311afcd7db046c4c4d8248";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`; 
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}
}