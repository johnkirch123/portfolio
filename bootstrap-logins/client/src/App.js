import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  );
}

export default App;
