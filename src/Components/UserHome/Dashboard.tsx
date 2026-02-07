import React, { useState, useEffect } from 'react'
import MapView from './MapView'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'
import type { User, Trail } from '../../types'

interface DashboardProps {
  user: User | ''
  userTrails: Trail[]
  id: string
  handleError: (error: unknown) => void
  setUserTrails: React.Dispatch<React.SetStateAction<Trail[]>>
  setFetchUserTrails: React.Dispatch<React.SetStateAction<boolean>>
}

const Dashboard: React.FC<DashboardProps> = ({
  user,
  userTrails,
  id,
  handleError,
  setFetchUserTrails,
}) => {
  const [deleteFetch, setDeleteFetch] = useState(false)
  const [trailId, setTrailId] = useState<number | undefined>()

  let greenTrails = 0
  let blueTrails = 0
  let blackTrails = 0
  let doubleBlackTrails = 0
  let verticalFeet = 0
  let hiked = 0
  let miles = 0

  userTrails.forEach((trail) => {
    hiked += trail.ascent
    miles += trail.length
    verticalFeet += Math.abs(trail.descent)
    if (trail.difficulty === 'dblack') doubleBlackTrails += 1
    else if (trail.difficulty === 'black') blackTrails += 1
    else if (trail.difficulty === 'blue') blueTrails += 1
    else if (trail.difficulty === 'green') greenTrails += 1
  })

  useEffect(() => {
    async function deleteTrail() {
      await fetch(
        `https://linefinder-back-end.herokuapp.com/user_trails/${id}/${trailId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
          },
        }
      )
        .then((res) => res.json())
        .then(() => setFetchUserTrails(true))
        .catch(handleError)
    }
    if (deleteFetch && trailId !== undefined) {
      deleteTrail()
      setDeleteFetch(false)
    }
  }, [deleteFetch, trailId, id, handleError, setFetchUserTrails])

  const trailListing = (trail: Trail) => (
    <div key={trail.id} className="trail-listing">
      <p>{trail.name}</p>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setTrailId(trail.trail_id)
          setDeleteFetch(true)
        }}
      >
        Remove
      </button>
    </div>
  )

  const noTrails = () => (
    <Link id="add-trails" to={`/home/${id}/all-trails`}>
      Add trails to your collection!
    </Link>
  )

  const mapList = () => {
    if (userTrails.length === 0) return noTrails()
    return userTrails.map((trail) => trailListing(trail))
  }

  const firstName = typeof user === 'object' && user ? user.first_name : ''

  return (
    <div id="dashboard">
      <h3 id="welcome">Welcome, {firstName}</h3>
      <section className="my-trails">
        <div className="map-list">
          <h3>My trails</h3>
          <div className="list-container">{userTrails.length ? mapList() : noTrails()}</div>
        </div>
        <div className="map" style={{ height: '430px', width: '100%', margin: '5% 5% 0 0' }}>
          <MapView trails={userTrails} />
        </div>
      </section>
      <h2 id="stats-title">Stats</h2>
      {userTrails.length >= 1 ? (
        <section id="user-stats">
          <div className="stats">
            <h2>Difficulty</h2>
            <Doughnut
              data={{
                labels: ['Green', 'Blue', 'Black', 'Double Black'],
                datasets: [
                  {
                    data: [greenTrails, blueTrails, blackTrails, doubleBlackTrails],
                    backgroundColor: [
                      'rgb(17, 182, 17)',
                      'rgb(11, 125, 201)',
                      'rgb(65, 65, 65)',
                      'black',
                    ],
                  },
                ],
              }}
              style={{ height: '200px' }}
            />
          </div>
          <div className="stats">
            <p>Vertical Skied: {verticalFeet} ft.</p>
            <p>Vertical Hiked: {hiked} ft.</p>
            <p>Miles Skied: {miles.toFixed(1)}</p>
            <p>Trails: {userTrails.length}</p>
          </div>
        </section>
      ) : null}
    </div>
  )
}

export default Dashboard
