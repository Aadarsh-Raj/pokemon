import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { StoreContext } from "./Store/store";
import Pagination from "./Components/Pagination";
import PokemonCardDetails from "./Components/PokemonCardDetails";
import PokemonContainer from "./Components/PokemonContainer";

function App() {
  return (
    <>
      
      <StoreContext>
        <main className="main-container">
          <Header />
            <Routes>
              <Route path="/" element={<Pagination />} />
              <Route path="/pokemon/:name" element={<PokemonCardDetails />} />
              <Route path="/pokemon" element={<PokemonContainer />} />

            </Routes>
        </main>
      </StoreContext>
    </>
  );
}

export default App;
