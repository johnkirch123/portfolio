import React from 'react';

const DateTimeComponent = ({ dateTime }) => {
  const dateTimeString = new Date(dateTime * 1000).toString();
  const dateTimeArray = dateTimeString.split(' ');
  let date = '';
  if (dateTimeArray !== []) {
    for (let i = 0; i < 4; i++) {
      date += dateTimeArray[i] + ' ';
    }
  }

  return (
    <div className='date__time'>
      <h2 className='time'>{`${dateTimeArray[4]}`}</h2>
      <h4 className='date'>{`${date}`}</h4>
    </div>
  );
};

export default DateTimeComponent;
