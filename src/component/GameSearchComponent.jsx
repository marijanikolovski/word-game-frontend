import React from 'react'

export const GameSearchComponent = ({
  handleSearchTerm,
  searchWord,
  resetGame
}) => {
  return (
    <div>
      <input
        className='input'
        type="text"
        onChange={handleSearchTerm}
        placeholder="Enter the word."
      />
      <button
        className='btn'
        onClick={searchWord}
      >
        Play
      </button>
      <button
        className='btn'
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  )
}
