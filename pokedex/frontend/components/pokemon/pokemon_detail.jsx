import { Link } from 'react-router-dom';
import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestOnePoke();
  }

  componentWillReceiveProps(newProps){
    if(this.props.poke.id!==newProps.poke.id)
    {
      this.props.requestOnePoke();
    }
  }

  getMoves(input){
    if(input){ return input.join(", ");}
    return input;
  }

  symbolURL(id){
    return "/pokemon/" + this.props.poke.id + "/items/" + id;
  }

  renderItems(items){
    if (!items) return "";
    return items.map(item => (
      <span className="item-detail">
        <label>Name: {item.name}</label>
        <label>Price: {item.price}</label>
        <label>Happiness: {item.happiness}</label>
        <Link to={this.symbolURL(item.id)}>
          <img value={item.id} src={item.image_url} height="40" width="40"/>
        </Link>
      </span>
    ));
  }

  render(){
    return(
      <div className="poke-detail">
        <div className="poke-personal">
          <h2><label>Name: {this.props.poke.name}</label></h2>
          <img src={this.props.poke.image_url} height="400" width="400"/>
          <label>Attack: {this.props.poke.attack}</label>
          <label>Defense: {this.props.poke.defense}</label>
          <label>Type: {this.props.poke.poke_type}</label>
          <label>Moves: {this.getMoves(this.props.poke.moves)}</label>
        </div>
        <div className="item-box">
          {this.renderItems(this.props.poke.array)}
        </div>
      </div>
    );
  }

}

export default PokemonDetail;
