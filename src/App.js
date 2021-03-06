import React from 'react';
import Login from './Components/SignupLogin/Login';
import Signup from './Components/SignupLogin/Signup';
import PublicHome from './Components/PublicHome/PublicHome';
import UserHome from './Components/UserHome/UserHome';
import twitterIcon from './Images/twitterIcon.svg'
import facebookIcon from './Images/facebookIcon.svg'
import youtubeIcon from './Images/youtubeIcon.svg'
import instagramIcon from './Images/instagramIcon.svg'
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
        <footer>
          <div>
            <section className='footer-section'>
              <p>© 2020 Cody Shaben</p>
              <p>Privacy Policy</p>
              <p>support@linefinder.com</p>
              <p>Denver, CO</p>
            </section>
            <section className='footer-section'>
              <h3>Follow us on social media!</h3>
              <div id='icon-div'>
                <img src={twitterIcon} className='icon' alt='twitter-icon'></img>
                <img src={facebookIcon} className='icon' alt='facebook-icon'></img>
                <img src={youtubeIcon} className='icon' alt='youtube-icon'></img>
                <img src={instagramIcon} className='icon' alt='instagram-icon'></img>
              </div>
                
            </section>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;