import {RECEIVE_ONE_POKE} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ONE_POKE:
      return merge({}, state, {currentPoke: action.poke.id});
    default:
      return state;
  }
};

export default pokeReducer;
