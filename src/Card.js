import './Card.css'
import React, { useState } from 'react'

export default function Card({ props }) {
  const { name, status, species, gender, origin, location, image, id } = props
  const isFemale = gender !== 'Male' ? '♀' : '♂'
  const isAlive =
    status !== 'Dead' ? 'Is still Alive!' : '† Unfortunately dead.'
  const [isActive, setIsActive] = useState(false)

  return (
    <section key={id} className="Card">
      <h2>
        {name} {isFemale}
      </h2>
      <img className="CharacterImage" src={image} alt="" />

      <button className="CardButton" onClick={() => setIsActive(!isActive)}>
        Details
      </button>

      {isActive && (
        <>
          <p className="Species">{isAlive}</p>
          <ul className="CardList">
            <li className="CardListItem">Species: {species}</li>
            <li className="CardListItem">Origin: {origin.name}</li>
            <li className="CardListItem">📍 {location.name}</li>
          </ul>
        </>
      )}
    </section>
  )
}
