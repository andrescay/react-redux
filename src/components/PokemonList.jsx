import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons = Array(10).fill("") }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        // console.log("🚀 ~ {pokemons.map ~ pokemon:", pokemon);
        return (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            imag={pokemon.sprites.front_default}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
