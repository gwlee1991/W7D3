import {RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';
import {fetchAllPokemon} from '../util/api_util';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
    return merge({}, state, action.pokemon);
    case RECEIVE_ONE_POKEMON:
    return action.pokemon;
    default: return state;
  }
};

export default pokemonReducer;
