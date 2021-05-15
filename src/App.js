import React, { useState } from 'react'
import './App.css'
import Card from './Card'
import Navigation from './Navigation.js'
import logo from '../src/images/logo.png'
import CardLocations from './CardLocations'
import CardEpisodes from './CardEpisodes'

export default function App() {
  const [isActive, setIsActive] = useState({
    characters: true,
    locations: false,
    episodes: false,
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

  const urlEpisodes = 'https://rickandmortyapi.com/api/episode'
  const [episodes, setEpisodes] = useState([])

  React.useEffect(() => {
    fetch(urlEpisodes)
      .then(res => res.json())
      .then(res => setEpisodes(res.results))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      <div className="CharacterCards">
        <header className="AppHeader">
          <img className="HeaderImg" src={logo} alt=""></img>
          <h1>- Overview -</h1>
        </header>

        {isActive.characters &&
          characters.map(character => <Card props={character} />)}
      </div>

      <div className="LocationCards">
        {isActive.locations &&
          locations.map(location => <CardLocations props={location} />)}
      </div>

      <div className="EpisodeCards">
        {isActive.episodes &&
          episodes.map(episode => <CardEpisodes props={episode} />)}
      </div>

      <section className="NavigationBar">
        <Navigation isActive={isActive} handleClick={handleClick} />
      </section>
    </div>
  )

  function handleClick(event) {
    const value = event.target.name.toLowerCase()
    const obj = { characters: false, locations: false, episodes: false }
    obj[value] = true
    setIsActive(obj)
  }
}
