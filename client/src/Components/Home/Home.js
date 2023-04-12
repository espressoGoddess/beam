import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  return (
    <section className='home'>
      <h1 className='logo-home'>BEAM</h1>
      <h2>Beam is an interactive self-care feeling tracking app.</h2>
        <h3 className='blurb'>
        We created a flow intended to help you work through any kind of feeling or emotion you might be experiencing. You'll be asked to choose a feeling and reflect on it. Add anything about your experience that might help you avoid or recreate the feeling in the future (depending on the feeling). After your reflection, you'll see an offering of a few activities that might help. <br></br>Your entries will be available to you in the Feelings Archive for future reflection. 
        </h3> 
      <h2>We hope this process will help reveal useful patterns over time.</h2>
      <Link to='/how-are-you-feeling' className='uni-btn'>Let's dig in.</Link>
    </section>
  );
}

export default Home;