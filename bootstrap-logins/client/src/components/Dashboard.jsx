import { connect } from 'react-redux';

const Dashboard = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <h4>Logged Out</h4>;
      default:
        return (
          <div className='card' style={{ width: '18rem', margin: '5rem auto' }}>
            <img
              src={auth.pfp}
              alt='User Profile'
              className='card-img-top img-fluid'
            />
            <div className='card-body'>
              <h5>{`Welcome to your Dashboard ${auth.name.firstName} ${auth.name.lastName}`}</h5>
              {auth.description === 'No description given' ? (
                ''
              ) : (
                <p>{`description: ${auth.description}`}</p>
              )}
              {auth.email === 'no-email@email.com' ? (
                ''
              ) : (
                <p>{`email: ${auth.email}`}</p>
              )}
              {auth.location === 'Not Given' ? (
                ''
              ) : (
                <p>{`location: ${auth.location}`}</p>
              )}
              {auth.gender === 'No Gender Given' ? (
                ''
              ) : (
                <p>{`gender: ${auth.gender}`}</p>
              )}
              <p>{`You have visited ${auth.count} times`}</p>
            </div>
          </div>
        );
    }
  };
  return <>{renderContent()}</>;
};

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Dashboard);
