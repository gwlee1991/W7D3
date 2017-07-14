
import { fetchAllPokemon, fetchOnePoke } from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKE = "RECEIVE_ONE_POKE";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const receiveOnePoke = poke =>({
  type: RECEIVE_ONE_POKE,
  poke
});

export const requestOnePoke = (id) => (dispatch) => {
  return fetchOnePoke(id)
    .then(poke => dispatch(receiveOnePoke(poke)));
};
