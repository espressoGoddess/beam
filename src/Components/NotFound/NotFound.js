import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className='notfound-container'>
      <h1 className='notfound-header'>Oh no! This page either moved or doesn't exist. Try something else.</h1>
      <div className='notfound-blurb'>
        <p>PS - Hope you're doing well. 🤍</p>
        <p>PPS - Proud of you.</p>
      </div>
    </section>
  );
}

export default NotFound;