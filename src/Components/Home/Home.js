import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  return (
    <section className='home'>
      <h1 className='logo-home'>BEAM</h1>
      <h2>Thanks for stopping by</h2>
      <Link to='/how-are-you-feeling' className='uni-btn'>Let's dig in.</Link>
    </section>
  );
}

export default Home;