import { useState, useEffect } from 'react';
import keys from '../../config/default.json';
import IconComponent from '../weatherComponents/IconComponent';
import WeatherComponent from '../weatherComponents/WeatherComponent';
import AuxillaryWeatherComponent from '../weatherComponents/AuxillaryWeatherComponent';
import SearchComponent from '../weatherComponents/SearchComponent';
import DateTimeComponent from '../weatherComponents/DateTimeComponent';

function App() {
  const [dayNight, setDayNight] = useState('day');
  const [threeDayForecast, setThreeDayForecast] = useState([]);
  const [weather, setWeather] = useState({
    current: {
      dt: 0,
      temp: 70,
      weather: [{ main: 'Sunny' }],
      sunrise: 0,
      sunset: 0,
      location: ''
    }
  });

  useEffect(() => {
    let weatherObject =
      JSON.parse(localStorage.getItem('weather')) === null
        ? {}
        : JSON.parse(localStorage.getItem('weather'));

    const fetchData = async () => {
      const { lat, lon, location } = weatherObject;
      await fetch(
        `${keys.baseUrl}/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${keys.apiKey}`
      )
        .then((res) => res.json())
        .then((result) => {
          let forecastArray = [];
          setWeather({ ...result, location });
          for (let i = 1; i < 4; i++) {
            forecastArray.push(result.daily[i]);
            setThreeDayForecast(forecastArray);
          }
          const { dt, sunrise, sunset } = result.current;
          if (dt >= sunrise && dt < sunset) setDayNight('day');
          else setDayNight('night');
        });
    };

    if (weatherObject.lat !== weather.lat) {
      fetchData();
    }
  });

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      fetch(
        `http://api.positionstack.com/v1/forward?access_key=${keys.positionStackApiKey}&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((result) => {
          if (!result.error) {
            const lat = result.data[0].latitude;
            const long = result.data[0].longitude;
            fetch(
              `${keys.baseUrl}/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,hourly&appid=${keys.apiKey}`
            )
              .then((res) => res.json())
              .then((result) => {
                let forecastArray = [];
                setWeather({ ...result, location: e.target.value });
                localStorage.setItem(
                  'weather',
                  JSON.stringify({
                    lat: result.lat,
                    lon: result.lon,
                    location: e.target.value
                  })
                );
                for (let i = 1; i < 4; i++) {
                  forecastArray.push(result.daily[i]);
                  setThreeDayForecast(forecastArray);
                }
              })
              .then(() => {
                const { dt, sunrise, sunset } = weather.current;
                if (dt >= sunrise && dt < sunset) setDayNight('day');
                else setDayNight('night');
              });
          }
        });
    }
  };

  return (
    <div className='app'>
      <SearchComponent onSearch={handleSearch} />
      <DateTimeComponent
        location={weather.location}
        dateTime={weather.current.dt}
        timezoneOffset={weather.timezone_offset}
      />
      <IconComponent
        desc={weather.current.weather[0].main}
        dayNight={dayNight}
      />
      <WeatherComponent
        desc={weather.current.weather[0].main}
        temp={weather.current.temp}
        sunrise={weather.current.sunrise}
        sunset={weather.current.sunset}
        dateTime={weather.current.dt}
        timezoneOffset={weather.timezone_offset}
      />
      <AuxillaryWeatherComponent forecast={threeDayForecast} />
    </div>
  );
}

export default App;
