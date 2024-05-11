import React from 'react'
import "./Styles/favbtn.css"
import { MyFunctions } from '../Store/store'
const FavouriteBtn = (props) => {
   const myCtx = MyFunctions();
   function addOrRemoveFav(){
    const favouritePokemonList = JSON.parse(localStorage.getItem("pokemon")) || [];
    if(favouritePokemonList){
    
    }
   }
  return (
    <>
    <button className='fav-btn' style={props.style} onClick={addOrRemoveFav}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="red" stroke="#000" stroke-width="3" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    </button>
    
    
    </>
  )
}

export default FavouriteBtn
