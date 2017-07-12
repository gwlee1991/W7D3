
export const selectAllPokemon = ({pokemon}) => {
  return Object.keys(pokemon).map(id => pokemon[id]);
};
