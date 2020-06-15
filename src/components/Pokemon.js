import React from "react";
// import "./Todo.css";

export default function Pokemon({ pokemon }) {

  return (
    <li className="pokemon">
      {/* <img className="card-image" src={pokemon.img.front_defatult}></img> */}
      <h2 className="card-title">
        {pokemon.id}. {pokemon.name}
      </h2>
      <p className="card-subtitle">Type: {pokemon.types}</p>
    </li>
  );
}
