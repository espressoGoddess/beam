import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  return (
    <section className='home'>
      <h1>BEAM</h1>
      <h2>Welcome to Beam.</h2>
      <Link to='/how-are-you-feeling' className='home-btn'>Let's dig in.</Link>
    </section>
  );
}

export default Home;