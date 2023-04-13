import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import './JournalEntry.css';

const JournalEntry = ({ journal }) => {

  const {date, feeling, activity, journal_entry} = journal;
  const formattedDate = DateTime.fromFormat(date, 'yyyy-MM-dd')

  return (
    <section className='journal-boundary'>
      <div className='journal-entry'>
        <h2>{formattedDate.toLocaleString(DateTime.DATE_MED)}</h2>
        <div className='log-stats'>
          <h3>{`Today you were feeling ${feeling} so you decided to ${activity}`}</h3>
        </div>
        <div className='journal-content'>
          <p className='journal-text'>{journal_entry}</p>
        </div>
      <Link to={'/how-you-felt'} className="uni-btn">←</Link>
      </div>
    </section>
  )
}

export default JournalEntry;

JournalEntry.propTypes = {
  journal: PropTypes.shape({
    date: PropTypes.string.isRequired,
    feeling: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    journal_entry: PropTypes.string.isRequired,
    entry_id: PropTypes.number
  })
};