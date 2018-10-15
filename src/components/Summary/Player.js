import React from 'react';

const Player = (props) => {
  const { img, name } = props;

  return (
    <div className="player">
      <div className="player_avatar-wrap">
        <img src={img} alt="avatar" />
      </div>
      <div>
        <p className="player_name">{name}</p>
      </div>
    </div>
  );
};

export default Player;
