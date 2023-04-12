import React from "react";
import './Header.css';
import { Link, Route, Switch } from "react-router-dom";



const Header = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'></Route>
        <Route path='*'>
          <header>
            <nav>
              <Link to='/' className='logo'>BEAM</Link>
            </nav>
          </header>
        </Route>
      </Switch>
    </>
    
  )
}

export default Header;