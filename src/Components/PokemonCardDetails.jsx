import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Styles/pokemoncarddetails.css"
import BasicTabs from "./Extra";

const PokemonCardDetails = (props) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [bgColor, setBgColor] = useState("white");
  const [types, setTypes] = useState([]);
  const [species, setSpecies] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [pokImage, setPokImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qURmgNu3IrnPMaZdMx4FEjo-2csDvOwZxq2foEtlgGjcGML87xFFUnyI12Q-o2XMu7g&usqp=CAU"
  );
  const { name } = useParams();
  useEffect(() => {
    fetchPokemonDetails();
    fetchPokemonColor();
  }, [name]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemonData(data);
      setPokImage(data.sprites.other.dream_world.front_default);
      setTypes(data.types)
      setSpecies(data.species.name);
      setAbilities(data.abilities);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemonColor = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );
      const data = await response.json();
      setBgColor(data.color.name || "white");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="pokemon-details-card"
        style={{
          backgroundColor:"light"+ bgColor || "violet"
        }}
      >
        <div className="basic-details-container">
          <h1>{pokemonData.name}</h1>
          <div className="pokemon-type-container">
            {types.map((ele) => (
              <div className="type-card-item">{ele.type.name} </div>
            ))}
          </div>
        </div>
        <div className="image-container">
          <img src={pokImage} alt="" />
        </div>
        <div className="more-details-container-outer">
          <BasicTabs
            about={{
              height: pokemonData.height,
              weight: pokemonData.weight,
              species: species,
              abilities: abilities,
            }}
            stats={pokemonData.stats}
            moves={pokemonData.moves}
          />
        </div>
      </div>
    </>
  );
};

export default PokemonCardDetails;

