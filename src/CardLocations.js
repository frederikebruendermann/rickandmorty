import "./CardLocation.css";
import React from "react";

export default function CardLocations({ name, type, dimension, residents }) {
  return (
    <section className="CardLocations">
      <h2>{name}</h2>
      <ul className="CardListLocations">
        <li className="CardListItemLocations">type: {type}</li>
        <li className="CardListItemLocations">dimension: {dimension}</li>
        <li className="CardListItemLocations">Residents: {residents}</li>
      </ul>
    </section>
  );
}
