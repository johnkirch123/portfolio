import React from 'react';
import { getIcon } from '../icons/icons';

const AuxillaryWeatherComponent = ({ forecast }) => {
  return (
    <div className='weather__box--aux'>
      {forecast.map((day) => (
        <div key={day.sunrise}>
          <img
            className='icon__aux'
            src={getIcon(day.weather[0].main)}
            alt='weather icon'
          />
          <div className='weather__temp--aux'>{Math.round(day.temp.day)}°F</div>
          <div className='weather__conditions--aux'>
            {day.weather[0].description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuxillaryWeatherComponent;
