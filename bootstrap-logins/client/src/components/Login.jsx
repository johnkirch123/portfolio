import Button from './Button';
import loginButtons from '../data/loginButtons';

const Login = () => {
  return (
    <div
      className='border container-md bg-light flex flex-column justify-content-center align-content-center p-2 w-50'
      style={{ marginTop: '10rem' }}
    >
      <h1 className='px-4 text-center py-5'>Please choose a login method: </h1>
      {loginButtons.map((button) => (
        <Button
          key={button.color}
          color={button.color}
          text={button.text}
          link={button.link}
          icon={button.icon}
        />
      ))}
    </div>
  );
};

export default Login;
