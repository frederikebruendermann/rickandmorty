import "./App.css";
import Card from "./Card";
import characters from "./data-character.json";

export default function App() {
  return (
    <div className="App">
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
