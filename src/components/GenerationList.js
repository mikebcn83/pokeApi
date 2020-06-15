import React from "react";
import Cards from "./Cards";
import "./CardList.css";
import { useSelector } from "react-redux";

export default function CardList({ match }) {
  const pokeArray = useSelector((state) => state.AllPokemons);
  let result;

  
    switch (match.params.generations) {
      case "I":
        result = [];
        result = pokeArray.filter((pokemon) => pokemon.generation === "I");

        break;
      case "II":
        result = [];
        result = pokeArray.filter((pokemon) => pokemon.generation === "II");

        break;
      case "III":
        result = [];
        result = pokeArray.filter((pokemon) => pokemon.generation === "III");

        break;
      case "IV":
        result = [];
        result = pokeArray.filter((pokemon) => pokemon.generation === "IV");

        break;
      case "V":
        result = [];
        result = pokeArray.filter((pokemon) => pokemon.generation === "V");

        break;
        case "VI":
        result = [];
        result = pokeArray.filter((pokemon) => pokemon.generation === "VI");

        break;
        case "VII":
        result = [];
        result = pokeArray.filter((pokemon) => pokemon.generation === "VII");

        break;
      default:
    }
  
  return (
    <ul className="List">
      {result.map((pokemon) => (
        <Cards key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
}
