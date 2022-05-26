import { Link } from 'react-router-dom';
import { apps } from '../config/routes';
import weatherImage from '../img/weather-app.png';
import countdownImage from '../img/countdown-timer.png';
import cryptoImage from '../img/crypto.png';
import quizImage from '../img/quiz.png';
import recipeImage from '../img/food.jfif';
import todosImage from '../img/todos.PNG';

const Home = () => {
  const images = [
    weatherImage,
    countdownImage,
    quizImage,
    recipeImage,
    cryptoImage,
    todosImage
  ];
  return (
    <div className='home'>
      {apps.map((app, i) => (
        <Link key={app.name} to={app.route} className='card__link'>
          <div className='card'>
            <img src={images[i]} className='card__img' alt={app.name} />
            <div className='card__info'>{app.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
