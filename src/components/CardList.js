import React from "react";
import { _useLoadingState } from "./Hooks";
import Cards from "./Cards";
import "./CardList.css";
import { useSelector } from "react-redux";

export default function CardList() {
  const pokeArray = useSelector((state) => state.AllPokemons);
  return (
    <ul className="List">
      {pokeArray.map((pokemon) => (
        <Cards key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
}
