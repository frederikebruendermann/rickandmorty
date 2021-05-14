import "./Card.css";
import React from "react";

export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
}) {
  const isFemale = gender !== "Male" ? "♀️" : "♂️";

  return (
    <section className="Card">
      <h2>
        {name}
        {isFemale}
      </h2>
      <p className="Species">{status}</p>
      <img src={image} alt="" />
      <ul>
        <>
          <li>
            Species: {species} {isFemale}
          </li>
          <li>Origin: {origin}</li>
          <li>📍 {location}</li>
        </>
      </ul>
    </section>
  );
}
