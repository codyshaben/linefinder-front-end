import React from 'react'
import styles from './DropDown.module.css'

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
    <ul className={styles.dropdownList} id="difficulty-list" onMouseLeave={toggleDifficultyDropDown}>
      <button type="button" className={styles.dropdownLi} onClick={filterDblack}>
        Double Black
      </button>
      <button type="button" className={styles.dropdownLi} onClick={filterBlack}>
        Black
      </button>
      <button type="button" className={styles.dropdownLi} onClick={filterBlue}>
        Blue
      </button>
      <button type="button" className={styles.dropdownLi} onClick={filterGreen}>
        Green
      </button>
    </ul>
  )
}

export default DifficultyDropdown
