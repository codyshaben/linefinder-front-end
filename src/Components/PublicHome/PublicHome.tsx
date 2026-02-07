import React from 'react'
import './PublicHome.css'
import PublicNav from '../Navigation/PublicNav'

const PublicHome: React.FC = () => {
  return (
    <div className="public-home">
      <PublicNav />
      <h2>Start your next backcountry adventure.</h2>
      <div className="content trail">
        <p>
          Create an account and gain access to over 400 backcountry trails to ski or snowboard in
          Colorado&apos;s Rocky Mountains. Get directions, trail info. (difficulty, ratings,
          vertical feet, etc.), and add your favorite trails to your personal collection.
        </p>
        <h4>Trails</h4>
      </div>
      <div className="content friends">
        <h4>Friends</h4>
        <p>
          Join the message board and plan trips with your backcountry buddies, meet other outdoor
          adventurists like yourself, and build your own network. This is also a great way to
          carpool and make sure you aren&apos;t venturing out into the backcountry alone.
        </p>
      </div>
      <div className="content safety">
        <h4>Safety Tips</h4>
        <ul>
          <li>DON&apos;T GO ALONE</li>
          <li>Check local weather and look out for any avalanche alerts</li>
          <li>
            Always bring the proper equipment (Need help? Click{' '}
            <a
              id="rei-link"
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
    </div>
  )
}

export default PublicHome
