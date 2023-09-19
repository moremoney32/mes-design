import { configureStore } from "@reduxjs/toolkit";
import detailsPokemon from "./features/detailsPokemonsSlice"// c est moi qui choisit le nom de mon reducer

export default configureStore({
    reducer:{
        infoPokemons:detailsPokemon
    }
})