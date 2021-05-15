import './CardLocation.css'
import React from 'react'

export default function CardLocations({ props }) {
  const { name, type, dimension, id } = props

  return (
    <section key={id} className="CardLocations">
      <h2>{name}</h2>
      <ul className="CardListLocations">
        <li className="CardListItemLocations">Type: {type}</li>
        <li className="CardListItemLocations">Dimension: {dimension}</li>
      </ul>
    </section>
  )
}
