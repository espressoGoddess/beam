import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import activityData from '../../sampleData/activityData';
import entryData from '../../sampleData/entryData';
import feelingsData from '../Feelings/feelingsData';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Feelings from '../Feelings/Feelings';
import Activities from '../Activities/Activities';
import JournalPrompt from '../JournalPrompt/JournalPrompt';
import JournalEntry from '../JournalEntry/JournalEntry';
import FeelingsLog from '../FeelingsLog/FeelingsLog';
import NotFound from '../NotFound/NotFound';
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
  
  const saveNewEntry = (newEntry) => {
    setJournal(newEntry);
  }

  const filterActivities = () => {
    const feelingCategory = feelingsData
      .find(({ associatedFeelings }) => associatedFeelings.includes(feeling))
      ?.feeling.toLowerCase();
    const filtered = activities.filter(act => act.feelings.includes(feelingCategory));
    setFilteredActivities(filtered);
  }

  useEffect(() => {
    filterActivities();
  }, [feeling]);

  useEffect(() => {
    setUserLogs(entryData);
  }, []);

  

  return (
    <main>
      <Header user={user}/>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/how-are-you-feeling'><Feelings setFeeling={setFeeling}/></Route>
        <Route exact path='/why-are-you-feeling-that-way'><JournalPrompt feeling={feeling} updateJournal={saveNewEntry}/></Route>
        <Route exact path={'/what-should-you-do/:feeling'}>
          <Activities activities={filteredActivities} updateActivity={updateActivity} setFeeling={setFeeling}/>
        </Route>
        <Route exact path='/how-you-felt/entry/:id' render={({ match }) => {
          const { id } = match.params;
          const journal = userLogs.find(log => log.entryId === parseInt(id));
          if (!journal) {
            return null;
          }
          return <JournalEntry journal={journal}/>
        }}/>
        <Route exact path='/how-you-felt'><FeelingsLog logs={userLogs}/></Route>
        <Route path='*'><NotFound /></Route>
      </Switch>
    </main>
  )
}

export default App;
