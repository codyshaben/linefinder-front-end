import React from 'react';
import Login from './Components/SignupLogin/Login';
import Signup from './Components/SignupLogin/Signup';
import PublicHome from './Components/PublicHome/PublicHome';
import UserHome from './Components/UserHome/UserHome';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <header>
          <h1 className='lineFinder'>lineFinder</h1>
        </header>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path={`/home/:id`}>
            <UserHome />
          </Route>
          <Route exact path='/'>
            <PublicHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;