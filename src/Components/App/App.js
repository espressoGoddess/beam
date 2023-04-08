import React, {useState, useEffect} from 'react';
import { Route, NavLink } from 'react-router-dom';
import activityData from '../../sampleData/activityData';
import entryData from '../../sampleData/entryData';
import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';
import Activities from '../Activities/Activities';
import JournalPrompt from '../JournalPrompt/JournalPrompt';
import JournalEntry from '../JournalEntry/JournalEntry';
import FeelingsLog from '../FeelingsLog/FeelingsLog';
import './App.css';

const App = () => {
  const [user, setUser] = useState({id: 1, name: 'KB'});
  const [userLogs, setUserLogs] = useState([]);
  const [feeling, setFeeling] = useState('');
  const [activity, setActivity] = useState('');
  const [journal, setJournal] = useState(entryData[0]);
  const [activities, setActivities] = useState(activityData);
  const [filteredActivities, setFilteredActivities] = useState([]);

  const updateActivity = (activity) => {
    setActivity(activity);
  }

  useEffect(() => {
    filterActivities();
  }, [feeling]);

  const filterActivities = () => {
    const filtered = activities.filter(act => act.feelings.includes(feeling));
    setFilteredActivities(filtered);
  }

  useEffect(() => {
    setUserLogs(entryData);
  }, []);

  return (
    <main>
      <Header user={user}/>
      <Feelings setFeeling={setFeeling}/>
      <Activities activities={activities} updateActivity={updateActivity}/>
      <JournalPrompt />
      <JournalEntry journal={journal}/>
      <FeelingsLog logs={userLogs}/>
    </main>
  )
}

export default App;
