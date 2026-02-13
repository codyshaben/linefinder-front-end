import React from 'react'
import styles from './DropDown.module.css'

interface RatingDropdownProps {
  setFetchUrl: (url: string) => void
  toggleRatingDropDown: () => void
}

const RatingDropdown: React.FC<RatingDropdownProps> = ({
  setFetchUrl,
  toggleRatingDropDown,
}) => {
  const filterFiveStars = () => setFetchUrl('five-star')
  const filterFourStars = () => setFetchUrl('four-star')
  const filterThreeStars = () => setFetchUrl('three-star')
  const filterTwoStars = () => setFetchUrl('two-star')
  const filterOneStars = () => setFetchUrl('one-star')

  return (
    <ul className={styles.dropdownList} id="rating-list" onMouseLeave={toggleRatingDropDown}>
      <button type="button" className={styles.dropdownLi} onClick={filterFiveStars}>
        Five Star
      </button>
      <button type="button" className={styles.dropdownLi} onClick={filterFourStars}>
        Four Star
      </button>
      <button type="button" className={styles.dropdownLi} onClick={filterThreeStars}>
        Three Star
      </button>
      <button type="button" className={styles.dropdownLi} onClick={filterTwoStars}>
        Two Star
      </button>
      <button type="button" className={styles.dropdownLi} onClick={filterOneStars}>
        One Star
      </button>
    </ul>
  )
}

export default RatingDropdown
