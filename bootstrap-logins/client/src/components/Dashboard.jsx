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
              alt='User Profile Picture'
              className='card-img-top img-fluid'
            />
            <div className='card-body'>
              <h5>{`Welcome to your Dashboard ${auth.name.firstName} ${auth.name.lastName}`}</h5>
              <p>{`email: ${auth.email[0].value}`}</p>
              <p>{`gender: ${auth.gender}`}</p>
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
