import React from 'react';
import './style.scss';

import Summary from '../Summary';

const Main = () => (
  <div className="main_container">
    <div className="main_content">
      <h2 className="main_title">PLAYERS GOTTA PLAY</h2>
      <Summary />
    </div>
  </div>
);

export default Main;
