import React from 'react'
import './AllTrails.css'

interface MarkerProps {
  lat: number
  lng: number
}

const Marker: React.FC<MarkerProps> = () => {
  return (
    <div
      className="marker"
      style={{ backgroundColor: 'rgb(11, 125, 201)', cursor: 'pointer' }}
    />
  )
}

export default Marker
