import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons = Array(10).fill('') }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} />;
      })}
    </div>
  );
};

export default PokemonList;