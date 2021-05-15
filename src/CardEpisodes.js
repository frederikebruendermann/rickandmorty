import './CardEpisodes.css'
import React from 'react'

export default function CardEpisodes({ props }) {
  const { id, name, air_date, episode } = props

  return (
    <section key={id} className="CardEpisodes">
      <h2>{name}</h2>
      <ul>
        <li>Air Date: {air_date}</li>
        <li>Episode: {episode}</li>
      </ul>
    </section>
  )
}
