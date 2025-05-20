import axios from "axios";

const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => {        
      return res.data.results;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const getPokemonDetails = async (pokemon) => {
  return axios.get(pokemon.url)
  .then((res) => res.data)
  .catch((err) => {
    console.error("Error fetching Pokémon details:", err);
    throw err;
  });
}

export { getPokemon, getPokemonDetails };