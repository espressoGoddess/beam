import React from 'react';
import './Feelings.css'

const Feelings = ({ setFeeling }) => {

  const callBack = ({ target }) => {
    setFeeling(target.classList[1]);
  }

  return (
    <section className='feelings-page'>
      <h2 className='feelings-header'>How are you Feeling?</h2>
      <section className='feelings-container'>
        <p className='feeling happy' onClick={callBack}>Happy</p>
        <p className='feeling happy' onClick={callBack}>Content</p>
        <p className='feeling happy' onClick={callBack}>Optimistic</p>
        <p className='feeling sad' onClick={callBack}>Sad</p>
        <p className='feeling sad' onClick={callBack}>Lonely</p>
        <p className='feeling sad' onClick={callBack}>Depressed</p>
        <p className='feeling surprised' onClick={callBack}>Surpised</p>
        <p className='feeling surprised' onClick={callBack}>Confused</p>
        <p className='feeling surprised' onClick={callBack}>Excited</p>
        <p className='feeling bad' onClick={callBack}>Bad</p>
        <p className='feeling bad' onClick={callBack}>Stressed</p>
        <p className='feeling bad' onClick={callBack}>Tired</p>
        <p className='feeling fearful' onClick={callBack}>Fearful</p>
        <p className='feeling fearful' onClick={callBack}>Anxious</p>
        <p className='feeling fearful' onClick={callBack}>Insecure</p>
        <p className='feeling angry' onClick={callBack}>Angry</p>
        <p className='feeling angry' onClick={callBack}>Distant</p>
        <p className='feeling angry' onClick={callBack}>Frustrated</p>
        <p className='feeling disguisted' onClick={callBack}>Disguisted</p>
        <p className='feeling disguisted' onClick={callBack}>Disappointed</p>
        <p className='feeling disguisted' onClick={callBack}>Awful</p>
      </section>
    </section>
  )
}

export default Feelings;