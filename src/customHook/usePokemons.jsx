import { useEffect, useState } from "react"
import { mockPockemons } from "../helpers/mockPockemons"
export function usePokemons(){
    const [pokemons,setPokemons] = useState([])
    useEffect(()=>{
        setPokemons(mockPockemons)
    },[])
    return pokemons;
}