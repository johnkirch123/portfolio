import { useState, useEffect } from 'react';
import config from '../src/config/default.json';
import IconComponent from './components/IconComponent';
import WeatherComponent from './components/WeatherComponent';
import AuxillaryWeatherComponent from './components/AuxillaryWeatherComponent';
import './App.scss';
import SearchComponent from './components/SearchComponent';
import DateTimeComponent from './components/DateTimeComponent';

function App() {
  const [weather, setWeather] = useState({
    current: {
      dt: 0,
      temp: 70,
      weather: [{ main: 'Sunny' }],
      sunrise: 0,
      sunset: 0
    }
  });
  const [dayNight, setDayNight] = useState('day');
  const [threeDayForecast, setThreeDayForecast] = useState([]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      fetch(
        `http://api.positionstack.com/v1/forward?access_key=${config.positionStack_apiKey}&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (!result.error) {
            const lat = result.data[0].latitude;
            const long = result.data[0].longitude;
            fetch(
              `${config.baseUrl}/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,hourly&appid=${config.apiKey}`
            )
              .then((res) => res.json())
              .then((result) => {
                setWeather(result);
              })
              .then(() => {
                let forecastArray = [];
                console.log('weather', weather);
                const { dt, sunrise, sunset } = weather.current;
                if (dt >= sunrise && dt < sunset) setDayNight('day');
                else setDayNight('night');
                for (let i = 1; i < 4; i++) {
                  forecastArray.push(weather.daily[i]);
                  setThreeDayForecast(forecastArray);
                }
              });
          }
        });
    }
  };

  return (
    <div className='app'>
      <SearchComponent onSearch={handleSearch} />
      <DateTimeComponent dateTime={weather.current.dt} />
      <IconComponent
        desc={weather.current.weather[0].main}
        dayNight={dayNight}
      />
      <WeatherComponent
        desc={weather.current.weather[0].main}
        temp={weather.current.temp}
        sunrise={weather.current.sunrise}
        sunset={weather.current.sunset}
      />
      <AuxillaryWeatherComponent forecast={threeDayForecast} />
    </div>
  );
}

export default App;
