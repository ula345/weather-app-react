
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
   <Weather defaultCity = "London"/>
<footer> This project was created by Urszula Krzemińska and is {" "}
          <a href ="https://github.com/ula345/weather-app-react.git" rel="noreferrer" target="_blank"> open-sourrce on GitHub </a>
    and is run by <a href ="https://heuristic-goodall-dd8039.netlify.app/" rel="noreferrer" target="_blank">Netlify</a> 
    </footer>
    </div></div>
  );
}


