import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='button__white--outline'>
        10 Fun Apps
      </Link>
    </header>
  );
};

export default Header;