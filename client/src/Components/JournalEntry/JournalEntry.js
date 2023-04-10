import React from "react";
import { DateTime } from 'luxon';
import './JournalEntry.css';

const JournalEntry = ({ journal }) => {

  const {date, feeling, activity, journalEntry} = journal;
  const formattedDate = DateTime.fromFormat(date, 'yyyy-MM-dd')

  return (
    <section className='journal-boundary'>
      <div className='journal-entry'>
        <h2>Journal Entry</h2>
        <div className='log-stats'>
          <h3>{formattedDate.toLocaleString(DateTime.DATE_MED)}</h3>
          <h3>I felt {feeling}</h3>
          <h3>Activity I tried: {activity}</h3>
        </div>
        <div className='journal-content'>
          <p className='journal-text'>{journalEntry}</p>
        </div>
      </div>
    </section>
  )
}

export default JournalEntry;