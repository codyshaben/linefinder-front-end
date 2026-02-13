import React from 'react'
import styles from './AllTrails.module.css'

interface MarkerProps {
  lat: number
  lng: number
}

const Marker: React.FC<MarkerProps> = () => {
  return (
    <div
      className={styles.marker}
      style={{ backgroundColor: 'rgb(11, 125, 201)', cursor: 'pointer' }}
    />
  )
}

export default Marker
