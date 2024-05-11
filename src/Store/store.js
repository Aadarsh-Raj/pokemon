import { createContext, useContext, useEffect, useState } from "react";
const StoreContextController = createContext({});

export const MyFunctions = () => {
  return useContext(StoreContextController);
};

const StoreContext = ({ children }) => {
  const [apiEndpoint, setApiEndpoint] = useState("pokemon");
  const [paginationData, setPaginationData] = useState([]);
  const [page, setPage] = useState(0);
  const [pokBoolean, setPokBoolean] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [favPokemon, setFavPokemon] = useState(localStorage.getItem("pokemon") || []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/${apiEndpoint}?offset=${page}&limit=10`
      );
      const result = await response.json();
      if (
        apiEndpoint === "ability" ||
        apiEndpoint === "move" ||
        apiEndpoint === "type"
      ) {
        setPokBoolean(false);
        if (page != 0) {
          setPaginationData((prev) => [...prev, ...result.results]);
        } else {
          setPaginationData(() => result.results);
        }
        setPokBoolean(false);
      } else if (apiEndpoint === "pokemon") {
        setPokBoolean(true);
        if (page != 0) {
          setPokemonList((prev) => [...prev, ...result.results]);
        } else {
          setPokemonList(() => result.results);
        }
      } 
    } catch (error) {
      console.log(error);
    }
  };
  async function handleInfiniteScroll() {
    try {
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      if (innerHeight + scrollTop + 1 >= scrollHeight) {
        setPage((prev) => prev + 10);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [apiEndpoint, page]);
  const functionObject = {
    apiEndpoint,
    setApiEndpoint,
    paginationData,
    page,
    setPage,
    pokemonList,
    setPokemonList,
    pokBoolean,
    setPokBoolean,
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);
  return (
    <StoreContextController.Provider value={functionObject}>
      {children}
    </StoreContextController.Provider>
  );
};

export { StoreContext };
