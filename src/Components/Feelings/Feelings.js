import React from 'react';
import './Feelings.css';

const Feelings = ({ setFeeling }) => {

  const selectFeeling = ({ target }) => {
    setFeeling(target.classList[1]);
  }

  return (
    <section className='feelings-page'>
      <h1>BEAM</h1>
      <h2 className='feelings-header'>How are you today?</h2>
      <section className='feelings-container'>
        <p className='feeling happy' onClick={selectFeeling}>Happy</p>
        <p className='feeling happy' onClick={selectFeeling}>Content</p>
        <p className='feeling happy' onClick={selectFeeling}>Optimistic</p>
        <p className='feeling sad' onClick={selectFeeling}>Sad</p>
        <p className='feeling sad' onClick={selectFeeling}>Lonely</p>
        <p className='feeling sad' onClick={selectFeeling}>Depressed</p>
        <p className='feeling surprised' onClick={selectFeeling}>Surpised</p>
        <p className='feeling surprised' onClick={selectFeeling}>Confused</p>
        <p className='feeling surprised' onClick={selectFeeling}>Excited</p>
        <p className='feeling bad' onClick={selectFeeling}>Bad</p>
        <p className='feeling bad' onClick={selectFeeling}>Stressed</p>
        <p className='feeling bad' onClick={selectFeeling}>Tired</p>
        <p className='feeling fearful' onClick={selectFeeling}>Fearful</p>
        <p className='feeling fearful' onClick={selectFeeling}>Anxious</p>
        <p className='feeling fearful' onClick={selectFeeling}>Insecure</p>
        <p className='feeling angry' onClick={selectFeeling}>Angry</p>
        <p className='feeling angry' onClick={selectFeeling}>Distant</p>
        <p className='feeling angry' onClick={selectFeeling}>Frustrated</p>
        <p className='feeling disguisted' onClick={selectFeeling}>Disguisted</p>
        <p className='feeling disguisted' onClick={selectFeeling}>Disappointed</p>
        <p className='feeling disguisted' onClick={selectFeeling}>Awful</p>
      </section>
    </section>
  );
}

export default Feelings;