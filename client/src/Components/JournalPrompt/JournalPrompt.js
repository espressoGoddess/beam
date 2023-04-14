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
      history.push(`/what-should-you-do/${feeling}`)
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
        <p className="uni-btn" onClick={handleClick}>→</p>
        {error ? <p>Please tell us a bit more about how you're feeling today 🤍</p> : null}
      </form>
    </div>
  )
}

export default JournalPrompt;

JournalPrompt.propTypes = {
  updateJournal: PropTypes.func.isRequired,
  feeling: PropTypes.string.isRequired
}