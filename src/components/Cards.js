import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

export default function Cards({ pokemon }) {
  return (
    <li className="Card">
      <Link
        to={`/pokemon/${pokemon.id}`}
        style={{ textDecoration: "inherit", color: "black" }}
      >
        <img
          className="Card-image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <h2 className="Card-title">
          {pokemon.id}. {pokemon.name}
        </h2>
      </Link>
    </li>
  );
}
