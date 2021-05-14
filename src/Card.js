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
  return (
    <section className="Card">
      <h2>{name}</h2>
      <p className="Species">{status}</p>
      <img src={image} alt="" />
      <ul>
        <>
          <li>{species}</li>
          <li>{gender}</li>
          <li>{origin}</li>
          <li>{location}</li>
        </>
      </ul>
    </section>
  );
}
