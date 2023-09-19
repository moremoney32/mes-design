import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Header } from "./components/pokemons/header/Header";
import { PokemonsDetails } from "./components/pokemonsdetails/PokemonsDetails";
import { Found } from "./components/notfound/Found";
import { EditPokemons } from "./components/edit/EditPokemons";
import { DataProvider } from "./components/data/DataProvider";



export function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
       <Routes>
        
          <Route path="/" element ={<Home/>}/>
          <Route path="/pokemonDetails/:id" element ={<PokemonsDetails/>}/>
          <Route path="/found" element ={<Found/>}/>
          <Route path="/edit/:id" element ={<EditPokemons/>}/>
       
        <Route path={"*"} element ={<Found/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}


