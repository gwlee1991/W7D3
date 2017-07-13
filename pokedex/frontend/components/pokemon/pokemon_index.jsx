import PokemonIndexItem from './pokemon_index_item';
import { HashRouter, Route } from 'react-router-dom';
import React from 'react';

class pokemonIndex extends React.Component
{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  createPokemonListItem(pokemon){
    return(
      <li key={pokemon.id}>name={pokemon.name}
        <img src={pokemon.image_url} height="42" width="42"/>
      </li>
    );
  }

  createRoute(id){
    let mypath="/pokemon/"+id;
    return (<Route key={id*-1} path={mypath} component={ ()=>PokemonIndexItem } />);
  }

  render(){
    const routes = this.props.pokemon.map(poke =>(
      this.createRoute(poke.id))
    );
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />)
    );
    return (
      <div>
        "Index of Pokemon"
        <ul className="pokemon_list">
          {pokemonItems}
        </ul>

          {routes}



      </div>
    );
  }
}


export default pokemonIndex;
