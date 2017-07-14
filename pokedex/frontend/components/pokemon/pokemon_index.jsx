import PokemonIndexItem from './pokemon_index_item';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import React from 'react';
import PokemonDetailContainer from './pokemon_detail_container';
import {requestOnePoke} from "../../actions/pokemon_actions";

class pokemonIndex extends React.Component
{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  createRoute(id){
    let mypath="/pokemon/"+id;
    return (
      <Route key={id*-1} path={mypath} component={PokemonDetailContainer} />
    );
  }

  render(){
    console.log(this.props);
    const routes = this.props.pokemon.map(poke =>(
      this.createRoute(poke.id))
    );
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />)

    );
    return (
      <div>
        <h1>Best Pokemon Project Ever</h1>
        <div className="poke-index">
          <ul className="pokemon_list">
            {pokemonItems}
          </ul>
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        </div>
      </div>
    );
  }
}
// props.match.params.pokemonId

export default pokemonIndex;
