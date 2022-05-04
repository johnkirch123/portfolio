import React from 'react';
import sunrise from '../../icons/sunrise.png';
import sunset from '../../icons/sunset.png';
import keys from '../../config/default.json';

const SunStateComponent = ({ sunTime, icon, dateTime, timezoneOffset }) => {
  const sunTimeString = new Date(
    (sunTime + timezoneOffset + keys.locationOffset) * 1000
  ).toString();
  const sunTimeArray = sunTimeString.split(' ');

  return (
    <div className='weather__sun-state'>
      <h3>{icon === 'day' ? 'Sunrise' : 'Sunset'}</h3>
      <img
        className='icon__sun'
        src={icon === 'day' ? sunrise : sunset}
        alt='sun icon'
      />
      <h5>{sunTimeArray[4]}</h5>
    </div>
  );
};

export default SunStateComponent;
