import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to='/auth/google' className='btn btn-primary px-4'>
      Sign in With Google
    </Link>
  );
};

export default Button;
