import React, { useState, useEffect } from 'react'
import './AllTrails.css'
import ShowLoading from '../ShowLoading/ShowLoading';
import RatingDropdown from '../DropdownMenus/RatingDropdown'
import DifficultyDropdown from '../DropdownMenus/DifficultyDropdown'
import ListView from './ListView'
import MapView from './MapView'
import type { User, Trail } from '../../types'

interface AllTrailsProps {
  user: User | ''
  id: string
  userTrails: Trail[]
  setUserTrails: React.Dispatch<React.SetStateAction<Trail[]>>
  setFetchUserTrails: React.Dispatch<React.SetStateAction<boolean>>
}

const AllTrails: React.FC<AllTrailsProps> = ({
  user,
  id,
  userTrails,
  setFetchUserTrails,
}) => {
  const [limit, setLimit] = useState(10)
  const [isRatingOpen, setRatingOpen] = useState(false)
  const [isDifficultyOpen, setDifficultyOpen] = useState(false)
  const [listView, setListView] = useState(true)
  const [mapView, setMapView] = useState(false)
  const [loadMoreButton, setLoadMoreButton] = useState(false)
  const [loading, setIsLoading] = useState(true)
  const [fetchUrl, setFetchUrl] = useState('')
  const [trails, setTrails] = useState<Trail[]>([])

  useEffect(() => {
    async function fetchData() {
      const url = fetchUrl
        ? `https://linefinder-back-end.herokuapp.com/trails/${fetchUrl}`
        : 'https://linefinder-back-end.herokuapp.com/trails'
      await fetch(url)
        .then((response) => response.json())
        .then((result: { data?: Trail[] }) => {
          setTrails(result.data ?? [])
          setIsLoading(false)
          setLoadMoreButton(true)
        })
        .catch((error) => console.error(error))
    }
    fetchData()
  }, [fetchUrl])

  const toggleRatingDropDown = () => {
    setRatingOpen(!isRatingOpen)
    setDifficultyOpen(false)
  }

  const toggleDifficultyDropDown = () => {
    setRatingOpen(false)
    setDifficultyOpen(!isDifficultyOpen)
  }

  const onLoadMore = () => setLimit(limit + 10)

  const scrollToPlaces = () => {
    const placesContainer = document.querySelector('.places')
    if (placesContainer) placesContainer.scrollTo(0, 1000)
  }

  const showListView = () => {
    setListView(true)
    setMapView(false)
    setLoadMoreButton(true)
  }

  const showMapView = () => {
    setListView(false)
    setMapView(true)
    setLoadMoreButton(false)
  }

  return (
    <div className="places" onLoad={scrollToPlaces}>
      <section className="dropdown-menu">
        <header>Sort by:</header>
        <div className="dropdown-title">
          <header onMouseOver={toggleRatingDropDown}>Rating</header>
          {isRatingOpen && (
            <RatingDropdown
              setFetchUrl={setFetchUrl}
              toggleRatingDropDown={toggleRatingDropDown}
            />
          )}
        </div>
        <div className="dropdown-title">
          <header onMouseOver={toggleDifficultyDropDown}>Difficulty</header>
          {isDifficultyOpen && (
            <DifficultyDropdown
              setFetchUrl={setFetchUrl}
              toggleDifficultyDropDown={toggleDifficultyDropDown}
            />
          )}
        </div>
      </section>
      {loading ? (
        <ShowLoading />
      ) : (
        <div>
          <section className="views">
            <button type="button" className="view-button" onClick={showListView}>
              List
            </button>
            <p>|</p>
            <button type="button" className="view-button" onClick={showMapView}>
              Map
            </button>
          </section>
          <section
            style={{
              height: '100%',
              marginTop: '50px',
              overflowY: 'scroll',
              scrollBehavior: 'smooth',
            }}
          >
            {listView && (
              <ListView
                user={user}
                trails={trails}
                userTrails={userTrails}
                limit={limit}
                onLoadMore={onLoadMore}
                loadMoreButton={loadMoreButton}
                id={id}
                setFetchUserTrails={setFetchUserTrails}
                setFetchUrl={setFetchUrl}
              />
            )}
            {mapView && (
              <MapView
                id="alltrails-map"
                style={{ position: 'relative' }}
                trails={trails}
                limit={limit}
              />
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default AllTrails