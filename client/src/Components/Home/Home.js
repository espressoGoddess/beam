import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [blurb, setBlurb] = useState(false);

  return (
    <section className='home'>
      <h1 className='logo-home'>BEAM</h1>
      <button className='uni-btn' onClick={() => setBlurb(!blurb)}>What is Beam?</button>
      <div>
        {blurb &&
          <div className='blurb-section'>
            <h2>Beam is an interactive self-care feeling tracking app.</h2>
            <h3 className='blurb'>We created a flow intended to help you work through any kind of feeling or emotion you might be experiencing. You&apos;ll be asked to choose a feeling and reflect on it. Add anything about your experience that might help you avoid or recreate the feeling in the future (depending on the feeling). After your reflection, you&apos;ll see an offering of a few activities that might help. <br/><br/>Your entries will be available to you in the Feelings Archive for future reflection. <br/> <br/>We hope this process will help reveal useful patterns over time.</h3> 
          </div> 
        }
      </div>
      <Link to='/how-are-you-feeling' className='uni-btn'>Let&apos;s dig in.</Link>
    </section>
  );
}

export default Home;