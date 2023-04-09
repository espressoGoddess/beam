import React, { useState } from "react";
import './Activities.css';
import { Link } from 'react-router-dom';

const Activities = ({ activities, updateActivity }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const nextActivity = () => {
    const nextIndex = currentActivityIndex + 1;
    setCurrentActivityIndex(nextIndex);
  }

  const prevActivity = () => {
    const prevIndex = currentActivityIndex - 1;
    setCurrentActivityIndex(prevIndex);
  }

  const selectActivity = () => {
    updateActivity(activities[currentActivityIndex].activity);
  }

  return (
    <section className="activity-page">
      <div className="activity-card">
        {currentActivityIndex > 0 && <button onClick={prevActivity}>←</button>}
        <h2>{activities[currentActivityIndex].activity}</h2>
        {currentActivityIndex < activities.length - 1 && <button onClick={nextActivity}>→</button>}
      </div>
      <Link to="/why-are-you-feeling-that-way" className="go-button" onClick={selectActivity}>Let's do it!</Link>
    </section>
  )
}

export default Activities;