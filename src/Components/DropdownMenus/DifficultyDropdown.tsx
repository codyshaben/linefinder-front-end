import React from 'react'
import './DropDown.css'

interface DifficultyDropdownProps {
  setFetchUrl: (url: string) => void
  toggleDifficultyDropDown: () => void
}

const DifficultyDropdown: React.FC<DifficultyDropdownProps> = ({
  setFetchUrl,
  toggleDifficultyDropDown,
}) => {
  const filterDblack = () => setFetchUrl('double-black')
  const filterBlack = () => setFetchUrl('black')
  const filterBlue = () => setFetchUrl('blue')
  const filterGreen = () => setFetchUrl('green')

  return (
    <ul className="dropdown-list" id="difficulty-list" onMouseLeave={toggleDifficultyDropDown}>
      <button type="button" className="dropdown-li" onClick={filterDblack}>
        Double Black
      </button>
      <button type="button" className="dropdown-li" onClick={filterBlack}>
        Black
      </button>
      <button type="button" className="dropdown-li" onClick={filterBlue}>
        Blue
      </button>
      <button type="button" className="dropdown-li" onClick={filterGreen}>
        Green
      </button>
    </ul>
  )
}

export default DifficultyDropdown
