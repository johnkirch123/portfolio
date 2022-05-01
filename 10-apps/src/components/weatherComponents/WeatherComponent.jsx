import React from 'react';
import SunState from './SunStateComponent';

const WeatherComponent = ({
  desc,
  temp,
  sunrise,
  sunset,
  dateTime,
  timezoneOffset
}) => {
  return (
    <div className='weather'>
      <SunState
        sunTime={sunrise}
        icon={'day'}
        dateTime={dateTime}
        timezoneOffset={timezoneOffset}
      />
      <div className='weather__component'>
        <div className='weather__temp'>{Math.round(temp)}°</div>
        <div className='weather__conditions'>{desc}</div>
      </div>
      <SunState
        sunTime={sunset}
        icon={'night'}
        dateTime={dateTime}
        timezoneOffset={timezoneOffset}
      />
    </div>
  );
};

export default WeatherComponent;
