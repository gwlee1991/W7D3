
export const selectAllPokemon = ({pokemon}) => {
  return Object.keys(pokemon.entities).map(id => pokemon.entities[id]);
};

export const selectPoke = ({pokemon}, id) => {
  return pokemon.entities[id] || {};
};
