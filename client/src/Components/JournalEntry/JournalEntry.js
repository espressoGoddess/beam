import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DateTime } from 'luxon';
import './JournalEntry.css';
import { updateEntry } from "../../utilities/api-calls";

const JournalEntry = ({ journal, entryID }) => {

  const {date, feeling, activity, journal_entry } = journal;

  const [entry, setEntry] = useState(journal_entry);
  const [edit, setEdit] = useState(false);

  const formattedDate = DateTime.fromFormat(date, 'yyyy-MM-dd');
  const changeEdit = () => {
    setEdit(!edit);
  }

  const handleChange = (event) => setEntry(event.target.value);
  const cancelEdit = () => {
    changeEdit();
    setEntry(journal_entry);
  }

  const saveEntry = (updatedEntry, id) => {
    updateEntry(updatedEntry, id);
    changeEdit();
  }

  const showEntry = <p className='journal-text'>{journal_entry}</p>
  const entryButtons = <div><Link to={'/how-you-felt'} className="uni-btn">←</Link>
                          <button className="uni-btn" onClick={changeEdit}>update</button></div>

  const showForm = <textarea className='journal-content' value={entry} onChange={handleChange}/>
  const formButtons = <div>
                        <button className="uni-btn" onClick={cancelEdit}>cancel</button>
                        <button className="uni-btn" onClick={() => {
                          saveEntry(entry, entryID);
                        }}>save</button>
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
  )
}

export default JournalEntry;