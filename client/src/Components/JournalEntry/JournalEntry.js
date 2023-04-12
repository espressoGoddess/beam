import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from 'luxon';
import './JournalEntry.css';

const JournalEntry = ({ journal }) => {

  const {date, feeling, activity, journalEntry} = journal;
  const formattedDate = DateTime.fromFormat(date, 'yyyy-MM-dd')

  return (
    <section className='journal-boundary'>
      <div className='journal-entry'>
        <h2>{formattedDate.toLocaleString(DateTime.DATE_MED)}</h2>
        <div className='log-stats'>
          <h3>{`Today you were feeling ${feeling} so you decided to ${activity}`}</h3>
        </div>
        <div className='journal-content'>
          <p className='journal-text'>{journalEntry}</p>
        </div>
      <Link to={'/how-you-felt'}>←</Link>
      </div>
    </section>
  )
}

export default JournalEntry;