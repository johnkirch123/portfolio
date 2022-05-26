import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import WeatherApp from './components/mainAppComponents/WeatherApp';
import CountdownTimerApp from './components/mainAppComponents/CountdownTimerApp';
import QuizApp from './components/mainAppComponents/QuizApp';
import RecipeApp from './components/mainAppComponents/RecipeApp';
import CryptoApp from './components/mainAppComponents/CryptoApp';
import TodoApp from './components/mainAppComponents/TodoApp';

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
        <Route path='/recipe' element={<RecipeApp />} />
        <Route path='/crypto' element={<CryptoApp />} />
        <Route path='/todo' element={<TodoApp />} />
      </Routes>
    </div>
  );
};

export default App;
