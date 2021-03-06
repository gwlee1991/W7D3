import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
  }

  symbolURL (){
    return "/pokemon/" + this.props.pokemon.id;
  }

  render() {
    return (
      <li className="poke-individual" key={this.props.pokemon.id}>
        <Link to={this.symbolURL()}>
        <img src={this.props.pokemon.image_url} height="42" width="42"/>
        <br/>
        Name: {this.props.pokemon.name}
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
