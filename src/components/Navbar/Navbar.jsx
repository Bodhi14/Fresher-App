import React from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css";
const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="link-text">Explore</Link>
        <Link to="/resources" className="link-text">Resources</Link>
      </div>
    </>
  )
}

export default Navbar;