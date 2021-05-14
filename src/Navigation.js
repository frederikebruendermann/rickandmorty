import React, { useState } from "react";
import "./Navigation.css";
import Button from "./Button";

export default function Navigation() {
  const [isActive, setIsActive] = useState({
    characters: true,
    locations: false,
  });

  return (
    <nav className="Navigation">
      <Button isActive={isActive.characters} handleClick={handleClick}>
        characters
      </Button>
      <Button isActive={isActive.locations} handleClick={handleClick}>
        locations
      </Button>
    </nav>
  );

  function handleClick(event) {
    const value = event.target.name.toLowerCase();
    const obj = { characters: false, locations: false };
    obj[value] = true;
    setIsActive(obj);
  }
}
