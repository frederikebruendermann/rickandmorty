import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

export default function App() {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header class="App-header">
        <h1 data-header>Rick and Morty App</h1>
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
    </div>
  );
}
