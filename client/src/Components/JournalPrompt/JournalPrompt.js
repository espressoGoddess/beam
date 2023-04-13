import React, {useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './JournalPrompt.css';

const JournalPrompt = ( {updateJournal, feeling} ) => {
  const [newEntry, setNewEntry] = useState('');

  return (
    <div className="prompt-container">
      <form>
        <h2 className="prompt">Why are you feeling this way?</h2>
        <textarea id="journal-entry" onChange={(event) => setNewEntry(event.target.value)}></textarea>
        <Link to={`/what-should-you-do/${feeling}`} className="uni-btn" onClick={() => updateJournal(newEntry)}>→</Link>
      </form>
    </div>
  )
}

export default JournalPrompt;

JournalPrompt.propTypes = {
  updateJournal: PropTypes.func.isRequired,
  feeling: PropTypes.string.isRequired
}