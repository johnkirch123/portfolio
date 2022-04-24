const Button = ({ text, color, link, icon }) => {
  return (
    <>
      <a
        href={link}
        className='btn py-2 mb-4 d-block w-75 mx-auto'
        style={{ backgroundColor: `${color}`, color: 'white' }}
      >
        <span style={{ marginRight: '1rem' }}>{icon}</span>
        Sign in With {text}
      </a>
    </>
  );
};

export default Button;
