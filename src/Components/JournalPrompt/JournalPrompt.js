import React, {useState} from "react";
import { Link } from "react-router-dom";
import './JournalPrompt.css';

const JournalPrompt = ( {updateJournal} ) => {
  const [newEntry, setNewEntry] = useState('');

  const updateEntry = () => {
    const input = document.getElementById('journal-entry');
    setNewEntry(input.value);
  }

  const submitEntry = () => {
    updateJournal(newEntry);
  }

  return (
    <div className="prompt-container">
      <form>
        <h2 className="prompt">Why are you feeling this way?</h2>
        <textarea id="journal-entry" onChange={updateEntry}></textarea>
        <Link to="/how-you-felt" className="next-btn" onClick={submitEntry}>→</Link>
      </form>
    </div>
  )
}

export default JournalPrompt;