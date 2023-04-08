import React from "react";
import './JournalPrompt.css'

const JournalPrompt = () => {
  return (
    <div className="prompt-container">
      <form>
        <h2 className="prompt">Why are you feeling this way?</h2>
        <textarea id="journal-entry"></textarea>
      </form>
      <button className="next-button">Next</button>
    </div>
  )
}

export default JournalPrompt;