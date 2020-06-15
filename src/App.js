import React, {useEffect} from "react";
// import background from './images/pokeballs_background.JPG';
// import imgHeader1 from './images/pokeball.JPG';
// import imgHeader2 from './images/gotta.png';
// import pikachu from './images/pikachu.gif';
import { useDispatch, useSelector } from "react-redux";
import { loadPokemon } from "./actions/pokeActions";
import Cards from "./components/Cards"

const _useLoadPokemons = () => {
  
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemon());
  }, []);
  
  
};

const _useLoadingOrError = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  return [loading, error];
}


function App() {
 
  _useLoadPokemons();

  const [loading, error] = _useLoadingOrError();


  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div className="error">{error.toString()}</div>;
  }

  return (
    <div className="App">
      {/* <img src={background} className="Background" alt="logo" />
      <header className="App-header">
        <img src={imgHeader1} className="App-logo" alt="logo" />
        <img src={imgHeader2} className="App-logo" alt="logo" />
        <img src={pikachu} className="App-logo" alt="logo" />
        <p>
         Ultimate Pokedex
        </p>
        
      </header> */}
      <Cards/>
    </div>
  );
}

export default App;
