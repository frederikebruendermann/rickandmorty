import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import Navigation from "./Navigation";
import logo from "../src/images/logo.png";
import CardLocations from "./CardLocations";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results))
      .catch((error) => console.error(error));
  }, []);

  const urlLocations = "https://rickandmortyapi.com/api/location";

  React.useEffect(() => {
    fetch(urlLocations)
      .then((res) => res.json())
      .then((res) => setLocations(res.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img className="HeaderImg" src={logo} alt=""></img>
      </header>

      {characters.map((character) => {
        const { name, status, species, gender, origin, location, image, id } =
          character;
        return (
          <Card
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            location={location.name}
            image={image}
          />
        );
      })}

      {locations.map((location) => {
        const { id, name, type, dimension } = location;
        return (
          <CardLocations
            key={id}
            name={name}
            type={type}
            dimension={dimension}
          />
        );
      })}

      <section className="NavigationBox">
        <Navigation>Characters</Navigation>
        <Navigation>Locations</Navigation>
        <Navigation>Episodes</Navigation>
      </section>
    </div>
  );
}
