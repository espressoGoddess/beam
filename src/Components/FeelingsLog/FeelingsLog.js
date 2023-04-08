import React from 'react';
import './FeelingsLog.css';

const toTitleCase= () => {
  
}

const FeelingsLog = ({logs}) => { 
  const  userLogs = logs.map(log => {
      return (<tr key={log.entryId}>
          <td>{log.date}</td>
          <td>{log.feeling}</td>
          <td>{log.activity}</td>
          <td>{log.journalBool ? '📓' : null}</td>
        </tr>)
    })
  return (
    <div className='FeelingsLog'>
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

    </div>
  )
}

export default FeelingsLog;