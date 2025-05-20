import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { setPokemons } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";
import { getPokemon, getPokemonDetails } from "./api";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)));
      dispatch(setPokemons(pokemonsDetailed));
    };

    fetchPokemons();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <Col>
        <PokemonList pokemons={pokemons} />
      </Col>
    </div>
  );
}

export default App;
