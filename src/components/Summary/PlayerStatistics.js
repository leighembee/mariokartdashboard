import React from 'react';
import {
  PieChart, Pie, Tooltip, Legend,
} from 'recharts';

import data from '../../data';
import {
  sortedWinnerData, sortedChampWinnerData, sortedCharacterData, sortedTrackData,
} from '../../utils/dataHelpers';

const _ = require('lodash/core');

// overall winners data
const flattenRaces = _.flattenDeep(_.map(data.Heats, 'races'));
const winnersData = sortedWinnerData(flattenRaces);
const topThree = winnersData.slice(0, 3);

// championship winners data
const flattenHeats = _.flattenDeep(_.map(data.Heats));
const champsData = sortedChampWinnerData(flattenHeats);
const topThreeChamps = champsData.slice(0, 3);

// top track data
const trackData = sortedTrackData(flattenRaces);
const topThreeTracks = trackData.slice(0, 3);

// top characters data
const flattenPlayers = _.flattenDeep(_.map(data.Heats, 'players'));
const charData = sortedCharacterData(flattenPlayers);
const topThreeChars = charData.slice(0, 3);

// top characters data
const colors = ['#049cd8', '#fbd000', '#43b047', '#4ce1b6', '#049cd8', '#fbd000', '#43b047', '#e52521', '#049cd8'];

const style = {
  top: 30,
  left: 240,
  width: 150,
  lineHeight: '24px',
};

const PlayerStatistics = () => (

  <div>
    <div className="tracks_stats_container">
      <div className="tracks_stats">
        <p className="chart_title">Top Overall Wins</p>
        <PieChart width={250} height={250}>
          <Tooltip />
          <Pie
            data={topThree.map((val, i) => (
              { name: val[0], value: val[1], fill: colors[i] }
            ))}
            dataKey="value"
            cx={110}
            cy={110}
            innerRadius={60}
            outerRadius={80}
            label
          />
          <Legend layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </PieChart>
      </div>
      <div>
        <p>Top Championship Wins</p>
        <PieChart width={250} height={250}>
          <Tooltip />
          <Pie
            data={topThreeChamps.map((val, i) => (
              { name: val[0], value: val[1].value, fill: colors[i + 1] }
            ))}
            dataKey="value"
            cx={110}
            cy={110}
            innerRadius={60}
            outerRadius={80}
            label
          />
          <Legend layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </PieChart>
      </div>
    </div>

    <div className="tracks_stats_container">
      <div className="tracks_stats">
        <p>Top Raced Tracks</p>
        <PieChart width={240} height={220}>
          <Tooltip />
          <Pie
            data={topThreeTracks.map((val, i) => (
              { name: val[0], value: val[1], fill: colors[i + 3] }
            ))}
            dataKey="value"
            cx={110}
            cy={110}
            innerRadius={60}
            outerRadius={80}
            label
          />
          <Legend layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </PieChart>
      </div>
      <div>
        <p>Most Popular Characters</p>
        <PieChart width={240} height={250}>
          <Tooltip />
          <Pie
            data={topThreeChars.map((val, i) => (
              { name: val[0], value: val[1], fill: colors[i] }
            ))}
            dataKey="value"
            cx={110}
            cy={110}
            innerRadius={60}
            outerRadius={80}
            label
          />
          <Legend layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </PieChart>
      </div>
    </div>
  </div>
);

export default PlayerStatistics;
