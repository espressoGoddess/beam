import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import './JournalEntry.css';
import { updateEntry } from "../../utilities/api-calls";

const JournalEntry = ({ journal, entryID, updateLogs }) => {

  const {date, feeling, activity, journal_entry } = journal;

  const [entry, setEntry] = useState(journal_entry);
  const [savedEntry, setSavedEntry] = useState(journal_entry);
  const [edit, setEdit] = useState(false);
  
  const formattedDate = DateTime.fromFormat(date, 'yyyy-MM-dd');
  
  const changeEdit = () => {
    setEdit(!edit);
  }

  const handleChange = (event) => setSavedEntry(event.target.value);

  const cancelEdit = () => {
    changeEdit();
    setSavedEntry(entry);
  }

  const saveEntry = () => {
    updateEntry(savedEntry, entryID)
    .then(() => updateLogs());
    setEntry(savedEntry);
    changeEdit();
  }

  const showEntry = <p className='journal-text'>{entry}</p>
  const entryButtons = <div>
                          <Link to={'/how-you-felt'} className="uni-btn">←</Link>
                          <button className="uni-btn" onClick={changeEdit}>update</button>
                        </div>

  const showForm = <textarea className='journal-text-edit' value={savedEntry} onChange={handleChange}/>
  const formButtons = <div>
                        <button className="uni-btn" onClick={cancelEdit}>cancel</button>
                        <button className="uni-btn" onClick={saveEntry}>save</button>
                      </div>
                      
  return (
    <section className='journal-boundary'>
      <div className='journal-entry'>
        <h2>{formattedDate.toLocaleString(DateTime.DATE_MED)}</h2>
        <div className='log-stats'>
          <h3>{`Today you were feeling ${feeling} so you decided to ${activity}`}</h3>
        </div>
        <div className='journal-content'>
          {edit ? showForm : showEntry}
        </div>
        {edit ? formButtons : entryButtons}
      </div>
    </section>
  );
}

export default JournalEntry;

JournalEntry.propTypes = {
  journal: PropTypes.shape({
    date: PropTypes.string.isRequired,
    feeling: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    journal_entry: PropTypes.string.isRequired,
    entry_ID: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    user_id: PropTypes.string,
  })
};