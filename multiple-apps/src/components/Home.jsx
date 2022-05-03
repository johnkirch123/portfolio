import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <Link to='/weather' className='home__link'>
        Weather App
      </Link>
      <Link to='/countdown_timer' className='home__link'>
        Countdown Timer App
      </Link>
      <Link to='/quiz' className='home__link'>
        Quiz App
      </Link>
    </div>
  );
};

export default Home;
