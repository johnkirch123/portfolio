import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaGithubAlt,
  FaLinkedin
} from 'react-icons/fa';

export default [
  {
    text: 'Twitter',
    color: '#1c99e6',
    link: '/auth/twitter',
    icon: <FaTwitter size={25} />
  },
  {
    text: 'Google',
    color: '#dc4a34',
    link: '/auth/google',
    icon: <FaGoogle size={25} />
  },
  {
    text: 'Facebook',
    color: '#3f62a9',
    link: '/auth/facebook',
    icon: <FaFacebookF size={25} />
  },
  {
    text: 'Github',
    color: '#000',
    link: '/auth/github',
    icon: <FaGithubAlt size={25} />
  },
  {
    text: 'Linkedin',
    color: '#0074ad',
    link: '/auth/linkedin',
    icon: <FaLinkedin size={25} />
  }
];
