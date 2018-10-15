import React from 'react';

import './style.scss';
import PlayerStatistics from './PlayerStatistics';


const Main = () => (
  <div>
    <div>
      <div>
        <h5 className="track_title"> Bragging Rights Analytics </h5>
      </div>
      <PlayerStatistics />
    </div>
  </div>
);

export default Main;
