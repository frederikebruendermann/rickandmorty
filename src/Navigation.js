import React from 'react'
import './Navigation.css'
import Button from './Button'

export default function Navigation({ isActive, handleClick }) {
  return (
    <nav className="Navigation">
      <Button
        name="characters"
        isActive={isActive.characters}
        handleClick={handleClick}
      >
        characters
      </Button>
      <Button
        name="locations"
        isActive={isActive.locations}
        handleClick={handleClick}
      >
        locations
      </Button>
      <Button
        name="episodes"
        isActive={isActive.episodes}
        handleClick={handleClick}
      >
        episodes
      </Button>
    </nav>
  )
}
