import "./Card.css";
import React, { useState } from "react";

export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
}) {
  const isFemale = gender !== "Male" ? "♀" : "♂";
  const isAlive = status !== "Dead" ? "Is still Alive!" : "Unfortunately dead.";
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="Card">
      <h2>
        {name} {isFemale}
      </h2>
      <button className="CardButton" onClick={() => setIsActive(!isActive)}>
        Details
      </button>
      {isActive && (
        <>
          <p className="Species">{isAlive}</p>
          <img className="CharacterImage" src={image} alt="" />
          <ul className="CardList">
            <li className="CardListItem">Species: {species}</li>
            <li className="CardListItem">Origin: {origin}</li>
            <li className="CardListItem">📍 {location}</li>
          </ul>
        </>
      )}
    </section>
  );
}
