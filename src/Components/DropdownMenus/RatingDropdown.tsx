import React from 'react'
import './DropDown.css'

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
    <ul className="dropdown-list" id="rating-list" onMouseLeave={toggleRatingDropDown}>
      <button type="button" className="dropdown-li" onClick={filterFiveStars}>
        Five Star
      </button>
      <button type="button" className="dropdown-li" onClick={filterFourStars}>
        Four Star
      </button>
      <button type="button" className="dropdown-li" onClick={filterThreeStars}>
        Three Star
      </button>
      <button type="button" className="dropdown-li" onClick={filterTwoStars}>
        Two Star
      </button>
      <button type="button" className="dropdown-li" onClick={filterOneStars}>
        One Star
      </button>
    </ul>
  )
}

export default RatingDropdown
