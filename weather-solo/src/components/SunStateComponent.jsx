import React from 'react';
import sunrise from '../icons/sunrise.png';
import sunset from '../icons/sunset.png';

const SunStateComponent = ({ sunTime, icon }) => {
  const sunTimeString = new Date(sunTime * 1000).toString();
  const sunTimeArray = sunTimeString.split(' ');
  //  let date = '';
  //  if (sunTimeArray !== []) {
  //    for (let i = 0; i < 4; i++) {
  //      date += sunTimeArray[i] + ' ';
  //    }
  //  }

  return (
    <div>
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
