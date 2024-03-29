import './CardEpisodes.css'
import React from 'react'
import './Card.css'

export default function CardEpisodes({ props }) {
  const { id, name, air_date, episode } = props

  const createDate = air_date.split(' ')
  const day = [createDate[1].replace(',', '.')]
  createDate.splice(1, 1)
  console.log(createDate)
  const newDate = day.concat(createDate).join(' ')

  return (
    <section key={id} className="CardEpisodes">
      <div class="CardBookmark--selected" aria-label="Add bookmark"></div>

      <h2>{name}</h2>
      <ul>
        <li>Air Date: {newDate}</li>
        <li>Episode: {episode}</li>
      </ul>
    </section>
  )
}
