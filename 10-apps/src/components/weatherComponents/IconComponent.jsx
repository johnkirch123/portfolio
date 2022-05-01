import React from 'react';
import { getIcon } from '../../icons/icons';

const IconComponent = ({ desc, dayNight }) => {
  return (
    <div>
      <img
        className='icon__image'
        src={getIcon(desc, dayNight)}
        alt='weather icon'
      />
    </div>
  );
};

export default IconComponent;
