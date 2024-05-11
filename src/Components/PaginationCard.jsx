import React, { useEffect, useState } from "react";
import "./Styles/paginationcard.css";
import { Link, useNavigate } from "react-router-dom";
import { MyFunctions } from "../Store/store";
import FavouriteBtn from "./FavouriteBtn";
const PaginationCard = (props) => {
  const myCtx = MyFunctions();
  const [bgColor, setBgColor] = useState("white");
  const [pokImage, setPokImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qURmgNu3IrnPMaZdMx4FEjo-2csDvOwZxq2foEtlgGjcGML87xFFUnyI12Q-o2XMu7g&usqp=CAU"
  );
  const navigate = useNavigate();
  useEffect(() => {
    fetchPokemonColor();
    fetchPokemonDetails();
  }, [props.name, myCtx.pokBoolean]);

  const fetchPokemonColor = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${props.name}`
      );
      const data = await response.json();
      setBgColor(data.color.name || "white");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.name}`
      );
      const data = await response.json();
      setPokImage(data.sprites.other.dream_world.front_default);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUrl = async () => {
    try {
      const response = await fetch(props.url);
      const data = await response.json();
      console.log(data);

      const pokemonList = (await data.pokemon)
        ? data.pokemon.map((ele) => ele.pokemon)
        : data.learned_by_pokemon.map((ele) => ele);
      console.log(pokemonList);

      myCtx.setPokBoolean(true);
      myCtx.setPokemonList(pokemonList);
    } catch (error) {
      console.log(error);
    }
  };
  function handleCard() {
    if (!myCtx.pokBoolean) {
      fetchUrl();
      navigate("/pokemon");
    }
  }

  return (
    <>
      <div
        className="card-item"
        style={{
          backgroundColor: bgColor,
          color: bgColor === "white" ? "black" : "white",
        }}
        onClick={handleCard}
      >
        {myCtx.pokBoolean ? (
          <Link to={`/pokemon/${props.name}`}>
            <div className="inner-card-item">{props.name}</div>
            <div className="inner-card-image-container">
              <img src={pokImage} alt="Pokemon" />
            </div>
            {/* <FavouriteBtn style={{top:"1rem"}} name={props.name} url={props.url}/> */}
          </Link>
        ) : (
          <Link to={`/pokemon`}>
            <div className="inner-card-item">{props.name}</div>
            <div className="inner-card-image-container">
              <img src={pokImage} loading="lazy" alt={"Pokemon"} />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default PaginationCard;
