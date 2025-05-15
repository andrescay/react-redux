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

const getPokemonTypes = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data.types.map((t) => t.type.name);
  } catch (err) {
    console.error("Error fetching Pokémon types:", err);
    return [];
  }
};

export { getPokemon, getPokemonTypes };