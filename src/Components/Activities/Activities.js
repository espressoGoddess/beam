import React, { useState } from "react";
import './Activities.css';

const Activities = ({ activities, updateActivity }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const nextActivity = () => {
    let nextIndex = currentActivityIndex + 1;
    setCurrentActivityIndex(nextIndex);
  }

  const prevActivity = () => {
    let prevIndex = currentActivityIndex - 1;
    setCurrentActivityIndex(prevIndex);
  }

  const selectActivity = () => {
    updateActivity(activities[currentActivityIndex].activity);
  }

  return (
    <section className="activity-page">
      <div className="activity-card">
        {currentActivityIndex > 0 && <button onClick={() => prevActivity()}>←</button>}
        <h2>{activities[currentActivityIndex].activity}</h2>
        {currentActivityIndex < activities.length - 1 && <button onClick={() => nextActivity()}>→</button>}
      </div>
      <button id="go-button" onClick={() => selectActivity()}>Let's do it!</button>
    </section>
  )
}

export default Activities;