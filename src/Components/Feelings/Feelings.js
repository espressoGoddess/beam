import React from 'react';
import './Feelings.css'

const Feelings = ({ setFeeling }) => {

  const callBack = ({ target }) => {
    setFeeling(target.classList[1]);
  }

  return (
    <section className='feelings'>
      <h2>How are you Feeling?</h2>
      <button className="feel-btn happy" onClick={callBack}>Happy</button>
      <button className="feel-btn happy" onClick={callBack}>Content</button>
      <button className="feel-btn happy" onClick={callBack}>Optimistic</button>
      <button className="feel-btn sad" onClick={callBack}>Sad</button>
      <button className="feel-btn sad" onClick={callBack}>Lonely</button>
      <button className="feel-btn sad" onClick={callBack}>Depressed</button>
      <button className="feel-btn surprised" onClick={callBack}>Surpised</button>
      <button className="feel-btn surprised" onClick={callBack}>Confused</button>
      <button className="feel-btn surprised" onClick={callBack}>Excited</button>
      <button className="feel-btn bad" onClick={callBack}>Bad</button>
      <button className="feel-btn bad" onClick={callBack}>Stressed</button>
      <button className="feel-btn bad" onClick={callBack}>Tired</button>
      <button className="feel-btn fearful" onClick={callBack}>Fearful</button>
      <button className="feel-btn fearful" onClick={callBack}>Anxious</button>
      <button className="feel-btn fearful" onClick={callBack}>Insecure</button>
      <button className="feel-btn angry" onClick={callBack}>Angry</button>
      <button className="feel-btn angry" onClick={callBack}>Distant</button>
      <button className="feel-btn angry" onClick={callBack}>Frustrated</button>
      <button className="feel-btn disguisted" onClick={callBack}>Disguisted</button>
      <button className="feel-btn disguisted" onClick={callBack}>Disappointed</button>
      <button className="feel-btn disguisted" onClick={callBack}>Awful</button>
    </section>
  )
}

export default Feelings;