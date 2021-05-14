import React, { useState } from 'react'
import './App.css'
import Card from './Card'
import Navigation from './Navigation.js'
import logo from '../src/images/logo.png'
import CardLocations from './CardLocations'

export default function App() {
  const [isActive, setIsActive] = useState({
    characters: true,
    locations: false,
  })

  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [])

  const urlLocations = 'https://rickandmortyapi.com/api/location'
  const [locations, setLocations] = useState([])

  React.useEffect(() => {
    fetch(urlLocations)
      .then(res => res.json())
      .then(res => setLocations(res.results))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      <div className="CharacterCards">
        <header className="AppHeader">
          <img className="HeaderImg" src={logo} alt=""></img>
          <h1>- Characters - </h1>
        </header>

        {isActive.characters &&
          characters.map(character => <Card props={character} />)}
      </div>

      <div className="LocationCards">
        {isActive.locations &&
          locations.map(location => {
            const { id, name, type, dimension } = location
            return (
              <CardLocations
                key={id}
                name={name}
                type={type}
                dimension={dimension}
              />
            )
          })}
      </div>

      <section className="NavigationBar">
        <Navigation isActive={isActive} handleClick={handleClick} />
      </section>
    </div>
  )

  function handleClick(event) {
    const value = event.target.name.toLowerCase()
    const obj = { characters: false, locations: false }
    obj[value] = true
    setIsActive(obj)
  }
}
