import React from 'react';
import Login from './components/SignupLogin/Login'
import Signup from './components/SignupLogin/Signup'
import PublicHome from './components/PublicHome/PublicHome'
import UserHome from './components/UserHome/UserHome'
import twitterIcon from './images/twitterIcon.svg'
import facebookIcon from './images/facebookIcon.svg'
import youtubeIcon from './images/youtubeIcon.svg'
import instagramIcon from './images/instagramIcon.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="lineFinder">lineFinder</h1>
        </header>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/:id/*" element={<UserHome />} />
          <Route path="/" element={<PublicHome />} />
        </Routes>
        <footer>
          <div>
            <section className="footer-section">
              <p>© 2020 Cody Shaben</p>
              <p>Privacy Policy</p>
              <p>support@linefinder.com</p>
              <p>Denver, CO</p>
            </section>
            <section className="footer-section">
              <h3>Follow us on social media!</h3>
              <div id="icon-div">
                <img src={twitterIcon} className="icon" alt="twitter-icon" />
                <img src={facebookIcon} className="icon" alt="facebook-icon" />
                <img src={youtubeIcon} className="icon" alt="youtube-icon" />
                <img src={instagramIcon} className="icon" alt="instagram-icon" />
              </div>
            </section>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
