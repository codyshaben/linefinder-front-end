import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import styles from './ShowLoading.module.css'

const ShowLoading: React.FC = () => {
  return (
    <div className={styles.loadingSpinner}>
      <RingLoader size={150} color="rgb(11, 125, 201)" />
      <h3>Loading...</h3>
    </div>
  )
}

export default ShowLoading
