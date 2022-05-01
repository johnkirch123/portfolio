import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import WeatherApp from './components/WeatherApp';
import CountdownTimerApp from './components/CountdownTimerApp';

import './css/style.css';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/weather' element={<WeatherApp />} />
        <Route path='/countdown_timer' element={<CountdownTimerApp />} />
      </Routes>
    </div>
  );
};

export default App;
