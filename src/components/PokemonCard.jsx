import { StarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Card } from "antd";
import { getPokemonTypes } from "../api";
import "./PokemonCard.css";

const typeIdMap = {
  normal: 1,
  fighting: 2,
  flying: 3,
  poison: 4,
  ground: 5,
  rock: 6,
  bug: 7,
  ghost: 8,
  steel: 9,
  fire: 10,
  water: 11,
  grass: 12,
  electric: 13,
  psychic: 14,
  ice: 15,
  dragon: 16,
  dark: 17,
  fairy: 18,
};

const PokemonCard = ({ name, url }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const result = await getPokemonTypes(url);
      setTypes(result);
    };

    fetchTypes();
  }, [url]);
  const getIndex = (url) => {
    const index = url.split("/").slice(-2, -1)[0];
    return index;
  };
  const pokeImg = (index) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
  };
  const index = getIndex(url);
  return (
    <Card
      className="PokemonCard"
      title={`${index}. ${name}`}
      cover={<img className="PokemonImage" src={pokeImg(index)} alt={name} />}
      extra={<StarOutlined />}
    >
      <div className="PokemonTypes">
        {types.map((type) => (
          <div key={type}>
            <img
              className="TypeIcon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/${typeIdMap[type]}.png`}
              alt={type}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PokemonCard;
