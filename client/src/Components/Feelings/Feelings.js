import React from 'react';
import './Feelings.css';
import feelingsData from './feelingsData';
import { Link } from 'react-router-dom';

const Feelings = ({ setFeeling }) => {

  const feelingsLinks = feelingsData.map(feelingData => {
    return feelingData.associatedFeelings.map(feel => {
      return <Link to={`/why-are-you-feeling-that-way`} key={feel} className='uni-btn' onClick={()=>setFeeling(feel)}>{feel}</Link>
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