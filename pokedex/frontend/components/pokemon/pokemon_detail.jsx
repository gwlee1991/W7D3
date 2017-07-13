
import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  componentWillReceiveProps(newProps){
    if(this.props.pokemon.id!==newProps.pokemon.id)
    {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    return(
      <div>
        THIS RENDERS YAY!
      </div>
    );
  }

}

export default PokemonDetail;
