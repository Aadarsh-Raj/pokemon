import React from 'react'
import Pagination from './Pagination'

const Home = () => {
  return (
    <>
    <Pagination />
    {/* 
    // moves (https://pokeapi.co/api/v2/move/{id or name}/)
    -> id:1
name:"pound"
accuracy:100
effect_chance:null
pp:35
priority:0
power:40


// abilities (https://pokeapi.co/api/v2/ability/{id or name}/)
--> result.name, result.url 
--> pokemon.pokemon.name, pokemon.pokemon.url 
// evolution --> await url --> chain.species.name, chain.species.url --> 
varieties.pokemon.name.url
// berry -> results.name, results.url --> natural_gift_type.name, natural_gift_type.url --> pokemon.pokemon.name

// moves -> learned_by_pokemon.name, learned_by_pokemon.url
// type --> pokemon.pokemon.name, pokemon.pokemon.url
// pokemon --> 

    

    */}
    
    
    </>
  )
}

export default Home
