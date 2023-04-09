import React from 'react';
import './Feelings.css';
import feelingsData from './feelingsData';
import { Link } from 'react-router-dom';

const Feelings = () => {

  const feelingsLinks = feelingsData.map(feelingData => {
    return feelingData.associatedFeelings.map(feel => {
      return <Link to={`/what-should-you-do/${feel}`} key={feel} className='feeling'>{feel}</Link>
    })
  });

  return (
    <section className='feelings-page'>
      <h1>BEAM</h1>
      <h2 className='feelings-header'>How are you today?</h2>
      <div className='feelings-container'>
        {feelingsLinks}
      </div>
    </section>
  );
}

export default Feelings;