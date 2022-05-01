import React from 'react';

const DateTimeComponent = ({ location, dateTime, timezoneOffset }) => {
  const locationOffsetUTC = 14400;
  const dateTimeString = new Date(
    (dateTime + locationOffsetUTC + timezoneOffset) * 1000
  ).toString();
  const dateTimeArray = dateTimeString.split(' ');
  let date = '';
  if (dateTimeArray !== []) {
    for (let i = 0; i < 4; i++) {
      date += dateTimeArray[i] + ' ';
    }
  }

  return (
    <div className='date__time'>
      <h1 className='location'>
        {location === undefined ? '' : `${location}`}
      </h1>
      <h3 className='time'>
        {dateTimeArray[4] === undefined
          ? `Please enter a location above`
          : `${dateTimeArray[4]}`}
      </h3>
      <h5 className='date'>{date.startsWith('Invalid') ? '' : `${date}`}</h5>
    </div>
  );
};

export default DateTimeComponent;
