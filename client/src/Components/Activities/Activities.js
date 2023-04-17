import React, { useState, useEffect } from "react";
import './Activities.css';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

const Activities = ({ activities, addEntry, setFeeling }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const { params } = useRouteMatch('/what-should-you-do/:feeling');
  useEffect(() => {
    setFeeling(params.feeling);
  }, [setFeeling, params.feeling]);

  const nextActivity = () => {
    const nextIndex = currentActivityIndex + 1;
    setCurrentActivityIndex(nextIndex);
  }

  const prevActivity = () => {
    const prevIndex = currentActivityIndex - 1;
    setCurrentActivityIndex(prevIndex);
  }

  const selectActivity = () => {
    addEntry(activities[currentActivityIndex].activity);
  }

  return (
    <section className="activity-page">
      <p className="activity-blurb">Here are a few activites that might meet you where you are...</p>
      <div className="activity-card">
        <div className="button-container">
          {currentActivityIndex > 0 && <button className="activities-btns" onClick={prevActivity}><i className="fa-solid fa-arrow-left-long"></i></button>}
        </div>
        <h2>{activities[currentActivityIndex]?.activity}</h2>
        <div className="button-container">
          {currentActivityIndex < activities.length - 1 && <button className="activities-btns" onClick={nextActivity}><i className="fa-solid fa-arrow-right-long"></i></button>}
        </div>
      </div>
      <Link to="/how-you-felt" className="uni-btn" onClick={selectActivity}>Let&apos;s do it!</Link>
    </section>
  );
}

export default Activities;

Activities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape({
    activityId: PropTypes.number,
    activity: PropTypes.string.isRequired,
    feelings: PropTypes.array
  })),
  addEntry: PropTypes.func.isRequired,
  setFeeling: PropTypes.func.isRequired
}
