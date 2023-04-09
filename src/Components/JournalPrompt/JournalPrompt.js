import React from "react";
import './JournalPrompt.css'

const JournalPrompt = () => {

  const saveEntry = () => {
    
  }

  return (
    <div className="prompt-container">
      <form>
        <h2 className="prompt">Why are you feeling this way?</h2>
        <textarea id="journal-entry"></textarea>
      </form>
      <button className="next-button" onClick={saveEntry}>Next</button>
    </div>
  )
}

export default JournalPrompt;