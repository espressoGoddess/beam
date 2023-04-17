import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchCall } from '../../utilities/api-calls';
import activityData from '../../sampleData/activityData';
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
  const [user, setUser] = useState({});
  const [userLogs, setUserLogs] = useState([]);
  const [feeling, setFeeling] = useState('');
  const [journal, setJournal] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [error, setError] = useState('');

  const saveNewEntry = (newEntry) => {
    setJournal(newEntry);
  }

  const addEntry = (activity) => {
    const date = new Date();
    const newEntry = {
      user_id: user.id,
      date: date.toISOString().split('T')[0],
      feeling: feeling,
      activity: activity,
      journal_entry: journal
    };
    fetchCall(newEntry).then(updateLogs)
    .catch(err => setError(err));
  }

  const filterActivities = () => {
    const feelingCategory = feelingsData
      .find(({ associatedFeelings }) => associatedFeelings.includes(feeling))
      ?.feeling.toLowerCase();
    const filtered = activityData.filter(act => act.feelings.includes(feelingCategory));
    setFilteredActivities(filtered);
  }

  useEffect(() => {
    filterActivities();
    setUser({id: 1, name: 'KB'});
  }, [feeling]);

  useEffect(() => {
    updateLogs();
  }, []);

  const updateLogs = () => {
    fetchCall()
    .then(data => setUserLogs(data))
    .catch(err => {
      setError(err);
    });
  }

  return (
    <main>
      <Header user={user}/>
      {error ? <NotFound err={error}/> :
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/how-are-you-feeling'><Feelings setFeeling={setFeeling}/></Route>
        <Route exact path='/why-are-you-feeling-that-way'><JournalPrompt feeling={feeling} updateJournal={saveNewEntry}/></Route>
        <Route exact path={'/what-should-you-do/:feeling'}>
          <Activities addEntry={addEntry} activities={filteredActivities} setFeeling={setFeeling}/>
        </Route>
        <Route exact path='/how-you-felt/entry/:id' render={({ match }) => {
          const { id } = match.params;
          const journal = userLogs.find(log => log.entry_id === parseInt(id));
          if (!journal) {
            return null;
          }
          return <JournalEntry journal={journal} entryID={id} updateLogs={updateLogs} setError={setError}/>
        }}/>
        <Route exact path='/how-you-felt'><FeelingsLog logs={userLogs}/></Route>
        <Route exact path='/404'><NotFound /></Route>
        <Route path='*'><Redirect to='/404'/></Route>
      </Switch>
      }
    </main>
  );
}

export default App;
