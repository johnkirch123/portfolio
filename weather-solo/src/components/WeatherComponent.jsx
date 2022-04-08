import React from 'react';
import SunState from './SunStateComponent';

const WeatherComponent = ({ desc, temp, sunrise, sunset }) => {
  return (
    <div className='weather'>
      <SunState sunTime={sunrise} icon={'day'} />
      <div className='weather__component'>
        <div className='weather__temp'>{Math.round(temp)}°</div>
        <div className='weather__conditions'>{desc}</div>
      </div>
      <SunState sunTime={sunset} icon={'night'} />
    </div>
  );
};

export default WeatherComponent;
