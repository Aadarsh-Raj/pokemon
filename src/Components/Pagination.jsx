import React, { useEffect } from "react";
import { MyFunctions } from "../Store/store";
import PaginationCard from "./PaginationCard";
import "./Styles/pagination.css";
const Pagination = () => {
  const myCtx = MyFunctions();
useEffect(()=>{

},[myCtx.pokBoolean])
  return (
    <>
      <div className="card-container">
        {!myCtx.pokBoolean
          ? myCtx.paginationData.map((ele) => (
              <PaginationCard
                key={ele.name + Math.floor(Math.random() * 1000)}
                name={ele.name || "Not Found"}
                url={ele.url}
              />
            ))
          : myCtx.pokemonList.map((ele) => (
              <PaginationCard
                key={ele.name + Math.floor(Math.random() * 10000)}
                name={ele.name}
                url={ele.url}
              />
            ))}
      </div>
    </>
  );
};

export default Pagination;
