import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import {fetchAllPokemon} from '../util/api_util';
import merge from 'lodash/merge';

const _default = {
  entities: {}
};
const pokemonReducer = (state = _default, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, {entities: action.pokemon});
    default:
      return state;
  }
};

export default pokemonReducer;
