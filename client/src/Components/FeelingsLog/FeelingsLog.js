import React from 'react';
import './FeelingsLog.css';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FeelingsLog = ({logs}) => {
  const toTitleCase = (item) => {
    return `${ item.slice(0, 1).toUpperCase() }${ item.slice(1) }`;
  }

  const sorted = logs
    .map(log => ({
      ...log,
      date: DateTime.fromFormat(log.date, 'yyyy-MM-dd'),
    }))
    .sort((a, b) => b.date - a.date);

  const  userLogs = sorted.map(log => {
    return (<tr key={log.entry_id}>
        <td>{log.date.toLocaleString(DateTime.DATE_MED)}</td>
        <td>{toTitleCase(log.feeling)}</td>
        <td className='truncate'>{log.activity}</td>
        <td>{<Link to={`/how-you-felt/entry/${log.entry_id}`}>📓</Link>}</td>
      </tr>);
  });

  return (
    <section className='feelingsLog'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th className='feeling-head'>Feeling</th>
            <th className='activity-head'>Activity</th>
            <th>Journal</th>
          </tr>
        </thead>
        <tbody>
        {userLogs}
        </tbody>
      </table>
    </section>
  );
}

export default FeelingsLog;

FeelingsLog.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape({
    entry_id: PropTypes.number.isRequired,
    user_id: PropTypes.string,
    date: PropTypes.string.isRequired,
    feeling: PropTypes.string.isRequired,
    journal_entry: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    activity: PropTypes.string.isRequired
  }))
}