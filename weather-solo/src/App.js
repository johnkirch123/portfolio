import { useState, useEffect } from 'react';
import config from '../src/config/default.json';
import IconComponent from './components/IconComponent';
import WeatherComponent from './components/WeatherComponent';
import AuxillaryWeatherComponent from './components/AuxillaryWeatherComponent';
import './App.css';
import SearchComponent from './components/SearchComponent';

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(
      `http://api.positionstack.com/v1/forward?access_key=${config.positionStack_apiKey}&query=ringgold, ga usa`
    )
      .then((res) => res.json())
      .then((result) => {
        const lat = result.data[0].latitude;
        const long = result.data[0].longitude;
        fetch(
          `${config.baseUrl}/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely&appid=${config.apiKey}`
        )
          .then((res) => res.json())
          .then((result) => console.log(result));
      });
  });

  return (
    <div className='app'>
      <SearchComponent />
      <IconComponent />
      <WeatherComponent />
      <AuxillaryWeatherComponent />
    </div>
  );
}

export default App;
