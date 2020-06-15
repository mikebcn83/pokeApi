import React from "react";
import { _useLoadingState } from "./Hooks";
import "./PokemonView.css";
import { useSelector } from "react-redux";

export default function PokemonView({ match }) {
  const [error] = _useLoadingState();
  const pokeArray = useSelector((state) => state.AllPokemons);
  const getItem = pokeArray.filter((pokemon) => pokemon.id == match.params.id);
  const pokemon = getItem.shift();

  if (error) {
    return <div className="error">{error.toString()}</div>;
  }

  return (
    <div className="Pokemon">
      <img
        className="Image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${match.params.id}.png`}
        alt={match.params.id}
      />
      <h2 className="Title">
        {pokemon.id}. {pokemon.name}
      </h2>
      <table class="Table">
        <tr>
          <th>Types</th>
          <th>Generation</th>
          <th>Height</th>
          <th>Weight</th>
        </tr>
        <tr>
          <td>{pokemon.types}</td>
          <td>{pokemon.generation}</td>
          <td>{pokemon.height}</td>
          <td>{pokemon.weight}</td>
        </tr>
      </table>
    </div>
  );
}
