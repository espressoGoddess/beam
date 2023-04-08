import React, {useState, useEffect} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import activityData from '../../sampleData/activityData';
import entryData from '../../sampleData/entryData';
import Home from '../Home/Home';
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
  const [journal, setJournal] = useState('');
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
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/how-are-you-feeling'><Feelings setFeeling={setFeeling}/></Route>
        <Route exact path='/what-should-you-do'><Activities activities={activities} updateActivity={updateActivity}/></Route>
        <Route exact path='/why-are-you-feeling-that-way'><JournalPrompt /></Route>
        <Route exact path='/how-you-felt/entry/:id' render={({ match }) => {
          const { id } = match.params;
          const journal = userLogs.find(log => log.entryId === parseInt(id));
          return <JournalEntry journal={journal}/>
        }}/>
        <Route exact path='/how-you-felt'><FeelingsLog logs={userLogs}/></Route>
      </Switch>
    </main>
  )
}

export default App;
