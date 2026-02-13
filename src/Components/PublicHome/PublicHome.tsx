import React from 'react';

import twitterIcon from './../../images/twitterIcon.svg';
import facebookIcon from './../../images/facebookIcon.svg';
import youtubeIcon from './../../images/youtubeIcon.svg';
import instagramIcon from './../../images/instagramIcon.svg';
import PublicNav from '../Navigation/PublicNav';

import styles from './PublicHome.module.css';

const PublicHome: React.FC = () => {
  return (
    <div className={styles.publicHome}>
      <header className={styles.header}>
          <h1 className={styles.title}>lineFinder</h1>
          <PublicNav />
      </header>
      <h2>Start your next backcountry adventure.</h2>
      <div className={`${styles.content} ${styles.trail}`}>
        <p>
          Create an account and gain access to over 400 backcountry trails to ski or snowboard in
          Colorado&apos;s Rocky Mountains. Get directions, trail info. (difficulty, ratings,
          vertical feet, etc.), and add your favorite trails to your personal collection.
        </p>
        <h4>Trails</h4>
      </div>
      <div className={`${styles.content} ${styles.friends}`}>
        <h4>Friends</h4>
        <p>
          Join the message board and plan trips with your backcountry buddies, meet other outdoor
          adventurists like yourself, and build your own network. This is also a great way to
          carpool and make sure you aren&apos;t venturing out into the backcountry alone.
        </p>
      </div>
      <div className={`${styles.content} ${styles.safety}`}>
        <h4>Safety Tips</h4>
        <ul>
          <li>DON&apos;T GO ALONE</li>
          <li>Check local weather and look out for any avalanche alerts</li>
          <li>
            Always bring the proper equipment (Need help? Click{' '}
            <a
              className={styles.reiLink}
              href="https://www.rei.com/learn/expert-advice/avalanche-safety-gear.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            )
          </li>
          <li>Last, but certainly not least, Have fun!!</li>
        </ul>
      </div>
      <footer>
          <div>
            <section className={styles.footerSection}>
              <p>© 2020 Cody Shaben</p>
              <p>Privacy Policy</p>
              <p>support@linefinder.com</p>
              <p>Denver, CO</p>
            </section>
            <section className={styles.footerSection}>
              <h3>Follow us on social media!</h3>
              <div id="icon-div">
                <img src={twitterIcon} className={styles.icon} alt="twitter-icon" />
                <img src={facebookIcon} className={styles.icon} alt="facebook-icon" />
                <img src={youtubeIcon} className={styles.icon} alt="youtube-icon" />
                <img src={instagramIcon} className={styles.icon} alt="instagram-icon" />
              </div>
            </section>
          </div>
        </footer>
    </div>
  )
}

export default PublicHome
