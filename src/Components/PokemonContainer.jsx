import React from 'react'
import "./Styles/pagination.css";
import { MyFunctions } from '../Store/store';
import PaginationCard from './PaginationCard';

const PokemonContainer = () => {
    const myCtx =MyFunctions();

  return (
    <>
    <div className="card-container">
    {
        myCtx.pokemonList.map((ele) => (
            <PaginationCard
              key={ele.name + Math.floor(Math.random() * 10000)}
              name={ele.name}
              url={ele.url}
            />
          ))
    }
    </div>
    
    </>
  )
}

export default PokemonContainer
