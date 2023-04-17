import React from 'react';
import './NotFound.css';
import PropTypes from 'prop-types';

const NotFound = ({err}) => {
  const message = err?.message.includes('5') ? "There has been a server error." : "This page either moved or doesn't exist.";
  
  return (
    <section className='notfound-container'>
      <h1 className='notfound-header'>Oh no! {message} Try something else.</h1>
      <div className='notfound-blurb'>
        <p>P.S. - Hope you&apos;re doing well. 🤍</p>
        <p>P.P.S. - Proud of you.</p>
      </div>
    </section>
  );
}

export default NotFound;

NotFound.propTypes = {
  err: PropTypes.object
}