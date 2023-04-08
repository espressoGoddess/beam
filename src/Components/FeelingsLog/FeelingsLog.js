import React from 'react';
import './FeelingsLog.css';
import { DateTime } from 'luxon'

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
    return (<tr key={log.entryId}>
        <td>{log.date.toLocaleString(DateTime.DATE_MED)}</td>
        <td>{toTitleCase(log.feeling)}</td>
        <td>{log.activity}</td>
        <td>{log.journalBool ? '📓' : null}</td>
      </tr>)
  })
  return (
    <section className='feelingsLog'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Feeling</th>
            <th>Activity</th>
            <th>Journal</th>
          </tr>
        </thead>
        <tbody>
        {userLogs}
        </tbody>
      </table>

    </section>
  )
}

export default FeelingsLog;