import { useEffect, useState } from 'react';
import arrow from '../../img/down-arrow.png';

const CountdownTimerApp = () => {
  const [intervalId, setIntervalId] = useState(0);
  const [countdownTo, setCountdownTo] = useState({
    name: 'New Years Eve',
    date: 'Jan 1, 2023',
    day: '1',
    month: 'Jan',
    year: '2023'
  });
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getStorage();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let date = countdownTo.date;
      let remainingTime = new Date(date).getTime() - new Date().getTime();
      let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      document.querySelector('#days').innerHTML = days;
      document.querySelector('#hours').innerHTML = hours;
      document.querySelector('#minutes').innerHTML = minutes;
      document.querySelector('#seconds').innerHTML = seconds;
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownTo]);

  const getStorage = () => {
    if (localStorage.getItem('countdown')) {
      setCountdownTo(JSON.parse(localStorage.getItem('countdown')));
    }
    console.log(localStorage.getItem('countdown'));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const {
      occasion: { value: name },
      month: { value: month },
      day: { value: day },
      year: { value: year }
    } = e.target;

    let today = new Date();
    today.setHours(0, 0, 0, 0);
    if (name === '' || month === '' || day === '' || year === '') {
      setError('Please make sure the information you entered is valid.');
      setTimeout(() => {
        setError('');
      }, 4000);
    } else if (new Date(`${month}/${day}/${year}`) < today) {
      setError('Please select a date in the future.');
      setTimeout(() => {
        setError('');
      }, 4000);
    } else {
      const date = new Date(`${month} ${day}, ${year}`).toLocaleDateString(
        'en-us',
        {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }
      );

      let countdownOccasion = {
        name,
        date,
        month,
        day,
        year
      };

      setCountdownTo(countdownOccasion);

      localStorage.setItem('countdown', JSON.stringify(countdownOccasion));

      document.querySelector('#occasion').value = '';
      document.querySelector('#month').value = '';
      document.querySelector('#day').value = '';
      document.querySelector('#year').value = '';
    }
  };

  const showForm = (visibility) => {
    setIsVisible(visibility);
    if (visibility) {
      document.querySelector('.countdown__arrow').classList.add('rotateUp');
      document
        .querySelector('.countdown__arrow')
        .classList.remove('rotateDown');
      document.querySelector('.countdown__form').classList.add('show');
      document.querySelector('.countdown__form').classList.remove('hide');
    } else {
      document.querySelector('.countdown__arrow').classList.add('rotateDown');
      document.querySelector('.countdown__arrow').classList.remove('rotateUp');
      document.querySelector('.countdown__form').classList.add('hide');
      document.querySelector('.countdown__form').classList.remove('show');
    }
  };

  return (
    <div className='countdown__app'>
      <h1 className='countdown__header'>{countdownTo?.name}</h1>
      <div className='countdown__container'>
        <div className='countdown__days'>
          <p id='days'></p>
          <span>days</span>
        </div>
        <div className='countdown__hours'>
          <p id='hours'></p>
          <span>hours</span>
        </div>
        <div className='countdown__minutes'>
          <p id='minutes'></p>
          <span>minutes</span>
        </div>
        <div className='countdown__seconds'>
          <p id='seconds'></p>
          <span>seconds</span>
        </div>
      </div>
      <div className='countdown__arrow' onClick={() => showForm(!isVisible)}>
        <img
          src={arrow}
          alt='arrow button'
          className='countdown__arrow--image'
        />
      </div>
      <form className='countdown__form hide' onSubmit={onHandleSubmit}>
        <label htmlFor='countdownTo'>What is the Countdown Occasion: </label>
        <input type='text' name='occasion' id='occasion' />
        <div className='countdown__form--group'>
          <label htmlFor='month'>Month: </label>
          <input type='text' name='month' id='month' />
          <label htmlFor='day'>Day: </label>
          <input type='text' name='day' id='day' />
          <label htmlFor='year'>Year: </label>
          <input type='text' name='year' id='year' />
        </div>
        <input
          type='submit'
          value='Submit'
          id='countdown__button'
          className='button__white--outline'
        />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CountdownTimerApp;
