import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import './JournalPrompt.css';

const JournalPrompt = ( {updateJournal, feeling} ) => {
  const [newEntry, setNewEntry] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    if (newEntry) {
      updateJournal(newEntry);
      history.push(`/what-should-you-do/${feeling}`);
    } else {
      setError(true);
      setTimeout(() => {setError(false)}, 2000);
    }
  }

  return (
    <div className="prompt-container">
      <form>
        <h2 className="prompt">Why are you feeling this way?</h2>
        <textarea required id="journal-entry" onChange={(event) => setNewEntry(event.target.value)}></textarea>
        <button className="uni-btn" onClick={handleClick}><i className="fa-solid fa-arrow-right-long"></i></button>
        {error ? <p style={{textAlign: 'center'}}> Please tell us a bit more about how you&apos;re feeling today - you can always edit it later. 🤍 </p> : null}
      </form>
    </div>
  );
}

export default JournalPrompt;

JournalPrompt.propTypes = {
  updateJournal: PropTypes.func.isRequired,
  feeling: PropTypes.string.isRequired
}