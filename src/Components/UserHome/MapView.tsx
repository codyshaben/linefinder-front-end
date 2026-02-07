import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import './UserHome.css'
import type { Trail } from '../../types'

interface MapViewProps {
  id?: string
  style?: React.CSSProperties
  trails?: Trail[]
  limit?: number
}

const MapView: React.FC<MapViewProps> = ({ trails = [] }) => {
  const apiKey = import.meta.env.VITE_MAPS_API_KEY ?? ''

  return (
    <div className="google-map" style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: 39.766636, lng: -105.98021 }}
        defaultZoom={8}
      >
        {trails.map((trail) => (
          <Marker key={trail.id} lat={trail.latitude} lng={trail.longitude} />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default MapView
