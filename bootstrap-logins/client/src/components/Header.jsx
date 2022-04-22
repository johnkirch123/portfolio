import { connect } from 'react-redux';
const Header = ({ auth }) => {
  console.log('auth from header:', auth);
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <h4>Logged Out</h4>;
      default:
        return (
          <a href='/auth/logout' className='btn btn-primary px-3 mr-4'>
            Logout
          </a>
        );
    }
  };
  return (
    <nav className='navbar navbar-light bg-light px-4'>
      <a className='navbar-brand' href='/'>
        Login App
      </a>
      {renderContent()}
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
