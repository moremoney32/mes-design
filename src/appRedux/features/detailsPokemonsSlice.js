import { createSlice } from "@reduxjs/toolkit";

const detailsPokemonsSlice  = createSlice({
    name:"detailsPokemons",
    initialState:{
        donneesPokemons:null
    },

    reducers:{
        setDonneesPokemons:(state,{payload})=>{
            state.donneesPokemons = payload
        }
    }
})

export const {setDonneesPokemons} = detailsPokemonsSlice.actions
export default detailsPokemonsSlice.reducer