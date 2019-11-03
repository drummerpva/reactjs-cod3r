import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
  <header className="main-header" >
    <Link to="/" className="logo" >
      <span className="logo-mini" ><b>My</b>M</span>
      <span className="logo-lg" >
        <i className="fa fa-money"></i>
        <b> My</b> Money
      </span>
    </Link>
    <nav className="navbar navbar-static-top">
      <a href="/#/" className="sidebar-toggle" data-toggle="offcanvas" >&nbsp;</a>
    </nav>
  </header>

);