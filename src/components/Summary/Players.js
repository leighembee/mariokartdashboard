import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Popup from 'reactjs-popup';

import Player from './Player';
import data from '../../data';
import { playersChars, findMostFreqLodash, playerTracks } from '../../utils/dataHelpers';

const _ = require('lodash/core');

const flattenPlayers = _.flattenDeep(_.map(data.Heats, 'players'));
const flattenRaces = _.flattenDeep(_.map(data.Heats, 'races'));
const playerData = playersChars(flattenPlayers);
const raceData = playerTracks(flattenRaces);
const favTrack = findMostFreqLodash(raceData);
const favCharacter = findMostFreqLodash(playerData);

const images = [
  'https://api.adorable.io/avatars/60/one@adorable.io.png',
  'https://api.adorable.io/avatars/60/two@adorable.io.png',
  'https://api.adorable.io/avatars/60/three@adorable.io.png',
  'https://api.adorable.io/avatars/60/four@adorable.io.png',
  'https://api.adorable.io/avatars/60/five@adorable.io.png',
  'https://api.adorable.io/avatars/60/six@adorable.io.png',
  'https://api.adorable.io/avatars/60/seven@adorable.io.png',
  'https://api.adorable.io/avatars/60/twenty@adorable.io.png',
  'https://api.adorable.io/avatars/60/fourty@adorable.io.png',
  'https://api.adorable.io/avatars/60/fourteen@adorable.io.png',
  'https://api.adorable.io/avatars/60/three@adorable.io.png',
  'https://api.adorable.io/avatars/60/four@adorable.io.png',
  'https://api.adorable.io/avatars/60/five@adorable.io.png',
  'https://api.adorable.io/avatars/60/one@adorable.io.png',
  'https://api.adorable.io/avatars/60/two@adorable.io.png',
  'https://api.adorable.io/avatars/60/three@adorable.io.png',
];

const Players = () => (
  <div>
    <div>
      <h5>Players</h5>
    </div>
    {favCharacter.map((val, i) => (
      <div key={val.name}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Player key={val} img={images[i]} name={val.name} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="player_details">
              <h4 className="">Favorite Character:</h4>
              <Popup
                trigger={(
                  <p className="player_item">
                    {val.val}
                  </p>
                )}
                modal
                closeOnDocumentClick
              >
                to do: replace this with stats about this character
              </Popup>
              <h4>Favorite Track:</h4>
              <Popup
                trigger={(
                  <p className="player_item">
                    {favTrack[i].val}
                  </p>)}
                modal
                closeOnDocumentClick
              >
                to do: replace this with stats about this track
              </Popup>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    ))}
  </div>
);

export default Players;
