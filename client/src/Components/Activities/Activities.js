import React, { useState, useEffect } from "react";
import './Activities.css';
import { Link, useRouteMatch } from 'react-router-dom';

const Activities = ({ activities, updateActivity, setFeeling }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const { params } = useRouteMatch('/what-should-you-do/:feeling');
  useEffect(() => {
    setFeeling(params.feeling);
  }, [setFeeling, params.feeling])

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
        {currentActivityIndex > 0 && <button className="activities-btns" onClick={prevActivity}>←</button>}
        <h2>{activities[currentActivityIndex]?.activity}</h2>
        {currentActivityIndex < activities.length - 1 && <button className="activities-btns" onClick={nextActivity}>→</button>}
      </div>
      <Link to="/how-you-felt" className="uni-btn" onClick={selectActivity}>Let's do it!</Link>
    </section>
  )
}

export default Activities;