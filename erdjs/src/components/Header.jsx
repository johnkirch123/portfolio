import '../css/header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <a href='#' className='header__logo--link'>
          Crypto Cavemen
        </a>
      </div>
      <ul className='header__nav'>
        <li className='header__nav--list'>
          <a href='#' className='header__nav--link'>
            Dashboard
          </a>
        </li>
        <li className='header__nav--list'>
          <a href='#' className='header__nav--link'>
            Cavemen
          </a>
        </li>
        <li className='header__nav--list'>
          <a href='#' className='header__nav--link'>
            About
          </a>
        </li>
        <li className='header__nav--list'>
          <a href='#' className='header__nav--link'>
            Roadmap
          </a>
        </li>
        <li className='header__nav--list'>
          <a href='/login' className='header__nav--link'>
            Connect
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
