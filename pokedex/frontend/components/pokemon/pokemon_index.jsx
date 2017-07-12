
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

  render(){

    const allPoke = this.props.pokemon.map(pokemon=>(
      this.createPokemonListItem(pokemon)
    ));
    return (
      <div>
        "Index of Pokemon"
        <ul className="pokemon_list">
          {allPoke}
        </ul>
      </div>
    );
  }
}


export default pokemonIndex;
