import BulbasaurImage from "./images/bulbasaur.jpg";
import React from "react";


function showCase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };
  const stylesForFirstSpan = {
    backgroundColor: "green",
    color: "white",
  };
  const stylesForSecondSpan = {
    backgroundColor: "white",
    color: "#00FF00",
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase</h1>
      <img src={BulbasaurImage} alt={favPokemon} />
      <h2>
        <span style={stylesForFirstSpan}>{favPokemon}'s type is </span>
        <span style={stylesForSecondSpan}>{pokeCharacteristics.type}</span>
        <span style={stylesForFirstSpan}>and one of their move is</span>
        <span style={stylesForSecondSpan}>{pokeCharacteristics.move}.</span>
      </h2>
    </div>
  );
}

export default showCase;
