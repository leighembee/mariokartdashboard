import React from 'react';
import Button from '@material-ui/core/Button';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';


import './style.scss';

const Homepage = () => (
  <div className="home_container">
    <h2 className="home_title">
      MARIO KART ALL(OY) STARS
    </h2>
    <Parallax
      offsetYMax={20}
      offsetYMin={-20}
      slowerScrollRate
    >
      <div className="enter">
        <Link to="/main">
          <Button variant="contained" size="large" color="primary" className="start">
            start
          </Button>
        </Link>
      </div>
    </Parallax>
  </div>
);

export default Homepage;
