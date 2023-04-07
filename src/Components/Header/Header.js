import React from "react";
import './Header.css'

const Header = ( {user} ) => {
  return (
    <h1>{user.name}</h1>
  )
}

export default Header;