import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = () => (
  <div className="header">
    <div className="nav-bar">
      <Link className="router-link" to="/">
        Home
      </Link>
      <Link className="router-link" to="/features">
        Features
      </Link>
    </div>
  </div>
);


export default Header;
