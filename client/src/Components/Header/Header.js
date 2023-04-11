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
              <Link to='/how-you-felt' className='uni-btn'>Feelings Archive</Link>
            </nav>
          </header>
        </Route>
      </Switch>
    </>

    
  )
}

export default Header;