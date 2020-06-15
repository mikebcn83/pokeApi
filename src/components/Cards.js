import React from "react";
import Pokemon from "./Pokemon";
import { useSelector } from "react-redux";

export default function Cards() {
   
  const pokeArray = useSelector((state) => state.AllPokemons);

  if(pokeArray){
    console.log(pokeArray[0])
  }
  
  return (
     <li className="card">
      {pokeArray.map((pokemon) => (
        <Pokemon key={pokemon.id} name={pokemon.name} types={pokemon.types} />
      ))}
     </li>
  )
}
