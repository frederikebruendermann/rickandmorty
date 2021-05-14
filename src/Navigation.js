import React, { useState } from 'react'
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
    </nav>
  )
}
