import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import Home from './Components/Home';
import Clock from './Components/Clock';
import Timer from './Components/Timer';
import Stopwatch from './Components/Stopwatch';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/clock">Clock</NavLink>
          <NavLink to="/timer">Timer</NavLink>
          <NavLink to="/stopwatch">Stopwatch</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
