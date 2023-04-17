import React from "react";
import './Header.css';
import { Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <Switch>
      <Route exact path='/'></Route>
      <Route path='*'>
        <header>
            <p className='logo'>BEAM</p>  
        </header>
      </Route>
    </Switch>
  )
}

export default Header;