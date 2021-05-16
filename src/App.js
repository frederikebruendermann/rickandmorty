import React, { useState } from 'react'
import './App.css'
import Card from './Card'
import Navigation from './Navigation.js'
import logo from '../src/images/logo.png'
import CardLocations from './CardLocations'
import CardEpisodes from './CardEpisodes'
import Button from './Button'

export default function App() {
  const [isActive, setIsActive] = useState({
    characters: true,
    locations: false,
    episodes: false,
  })

  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
  const [characters, setCharacters] = useState([])
  const [nextPage, setNextPage] = useState(
    '"https://rickandmortyapi.com/api/character?page=2"'
  )
  const [prevPage, setPrevPage] = useState('')

  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setCharacters(res.results)
        setNextPage(res.info.next)
        setPrevPage(res.info.prev)
      })
      .catch(error => console.error(error))
  }, [url])

  const [locations, setLocations] = useState([])
  const [urlLocations, setUrlLocations] = useState(
    'https://rickandmortyapi.com/api/location'
  )
  const [nextLocationsPage, setNextLocationsPage] = useState(
    'https://rickandmortyapi.com/api/location?page=2'
  )
  const [prevLocationsPage, setPrevLocationsPage] = useState('')

  React.useEffect(() => {
    fetch(urlLocations)
      .then(res => res.json())
      .then(res => {
        setLocations(res.results)
        setNextLocationsPage(res.info.next)
        setPrevLocationsPage(res.info.prev)
      })
      .catch(error => console.error(error))
  }, [urlLocations])

  const [urlEpisodes, setUrlEpisodes] = useState(
    'https://rickandmortyapi.com/api/episode'
  )
  const [episodes, setEpisodes] = useState([])
  const [nextEpisodesPage, setNextEpisodesPage] = useState(
    'https://rickandmortyapi.com/api/episode?page=2'
  )
  const [prevEpisodesPage, setPrevEpisodesPag] = useState('')

  React.useEffect(() => {
    fetch(urlEpisodes)
      .then(res => res.json())
      .then(res => setEpisodes(res.results))
      .catch(error => console.error(error))
  }, [setUrlEpisodes])

  // - LOOKING FOR A SOLUTION TO SHOW TITLES in H2 (Characters, Locations, Episodes) -
  // const setTitle =
  //   navItem === 'characters'
  //     ? 'Characters'
  //     : isActive === 'locations'
  //     ? 'Locations'
  //     : 'Episodes'
  // console.log(setTitle)

  return (
    <div className="App">
      <header className="AppHeader">
        <img className="HeaderImg" src={logo} alt=""></img>
        {/* <h1>- {setTitle} -</h1> */}
      </header>
      <main className="CardContainer">
        <div className="CharacterCards">
          <div className="Pagination">
            <button onClick={() => setUrl(prevPage)}>Previous</button>
            <button onClick={() => setUrl(nextPage)}>Next</button>
          </div>
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
      </main>
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
