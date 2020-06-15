import React from "react";
import Home from "./components/Home";
import CardList from "./components/CardList";
import GenerationList from "./components/GenerationList";
import PokemonView from "./components/PokemonView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { _useLoadPokemons } from "./components/Hooks";

function App() {
  _useLoadPokemons();
  return (
    <Router>
      <Home />
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route exact path="/generation/:generations" component={GenerationList} />
        <Route exact path="/pokemon/:id" component={PokemonView} />
      </Switch>
    </Router>
  );
}

export default App;
