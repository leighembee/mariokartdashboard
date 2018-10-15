import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';
import Routes from './Routes';


const App = () => (
  <ParallaxProvider>
    <Router>
      <div className="app-wrapper">
        <Routes />
      </div>
    </Router>
  </ParallaxProvider>
);


export default App;
