import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default connect(null, actions)(App);
