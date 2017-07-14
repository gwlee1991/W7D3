
import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import pokeReducer from './poke_reducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  poke: pokeReducer
});

export default rootReducer;
