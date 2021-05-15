import React from 'react'
import './Navigation.css'
import Button from './Button'

export default function Navigation({ isActive, handleClick }) {
  return (
    <nav className="Navigation">
      <Button isActive={isActive.characters} handleClick={handleClick}>
        characters
      </Button>
      <Button isActive={isActive.locations} handleClick={handleClick}>
        locations
      </Button>
      <Button isActive={isActive.episodes} handleClick={handleClick}>
        episodes
      </Button>
    </nav>
  )
}
