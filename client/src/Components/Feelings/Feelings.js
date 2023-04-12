import React from 'react';
import './Feelings.css';
import feelingsData from './feelingsData';
import { Link } from 'react-router-dom';

const Feelings = () => {

  const feelingsLinks = feelingsData.map(feelingData => {
    return feelingData.associatedFeelings.map(feel => {
      return <Link to={`/what-should-you-do/${feel}`} key={feel} className='uni-btn'>{feel}</Link>
    })
  });

  const sortedLinks = feelingsLinks.flat().sort((a, b) => {
    return (a.key > b.key) ? 1 : -1;
  })
  
  return (
    <section className='feelings-page'>
      <h2 className='feelings-header'>How are you today?</h2>
      <div className='feelings-container'>
        {sortedLinks}
      </div>
    </section>
  );
}

export default Feelings;