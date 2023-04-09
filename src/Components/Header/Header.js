import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/' className='logo'>BEAM</Link>
        <Link to='/how-you-felt' className='nav'>Feelings Archive</Link>
      </nav>
    </header>
  )
}

export default Header;