import React, {useState, useEffect} from "react";
import './Activities.css'

const Activities = ({ activities }) => {
  const [currentActivity, setCurrentActivity] = useState(0)

  const nextActivity = () => {
    let nextIndex = currentActivity + 1;
    setCurrentActivity(nextIndex)
  }

  const prevActivity = () => {
    let prevIndex = currentActivity - 1;
    setCurrentActivity(prevIndex)
  }

  return (
    <section className="activity-page">
    <div className="activity-card">
      {currentActivity > 0 && <button onClick={() => prevActivity()}>←</button>}
      <h2>{activities[currentActivity].activity}</h2>
      {currentActivity < activities.length - 1 && <button onClick={() => nextActivity()}>→</button>}
    </div>
    <button id="go-button">Let's do it!</button>
    </section>
  )
}

export default Activities;