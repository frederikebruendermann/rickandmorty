import React, { useState } from 'react'
import './App.js'

function paginationCharacters() {
  const [currentPage, setCurrentPage] = useState('characters')

  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
  const [characters, setCharacters] = useState([])
  const [nextPage, setNextPage] = useState(
    '"https://rickandmortyapi.com/api/character?page=2"'
  )

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
  return (
    <>
      <Button
        onClick={() => setUrlCharacters(prevCharacters)}
        isActive={currentPageCharacters !== 1}
      >
        <img src={icon1} alt="to left" />
      </Button>

      <span className="Span">
        {currentPageCharacters}/{pagesCharacters}
      </span>

      <Button
        onClick={() => setUrlCharacters(nextCharacters)}
        isActive={currentPageCharacters !== pagesCharacters}
      >
        <img src={icon2} alt="to right" />
      </Button>
    </>
  )
}
