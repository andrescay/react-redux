import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
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

const PokemonCard = ({ name, id, imag, types }) => {
  return (
    <Card
    className="PokemonCard"
    title={`${id}. ${name}`}
    cover={<img className="PokemonImage" src={imag} alt={name} />}
    extra={<StarOutlined />}
    >
      <div className="PokemonTypes">
        {types.map((type) => (
          <div key={type.type.name} className="Type">
            <img
              className="TypeIcon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-vii/lets-go-pikachu-lets-go-eevee/${typeIdMap[type.type.name]}.png`}
              alt={type}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PokemonCard;
