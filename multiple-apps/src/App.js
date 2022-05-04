import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import WeatherApp from './components/mainAppComponents/WeatherApp';
import CountdownTimerApp from './components/mainAppComponents/CountdownTimerApp';
import QuizApp from './components/mainAppComponents/QuizApp';

import './css/style.css';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/weather' element={<WeatherApp />} />
        <Route path='/countdown_timer' element={<CountdownTimerApp />} />
        <Route path='/quiz' element={<QuizApp />} />
      </Routes>
    </div>
  );
};

export default App;
