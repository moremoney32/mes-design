/***composant qui affiche la liste complete des pokemons */
import "./home.css"
import { Pokemons } from "../../components/pokemons/Pokemons"
import { usePokemons } from "../../customHook/usePokemons"
import { useEffect, useState } from "react"
import { FilterPokemons } from "../../components/pokemons/filterPokemons/FilterPokemons"
import { searchPokemons } from "../../helpers/searchPokemons"
import { mockPockemons } from "../../helpers/mockPockemons"
export const Home = ()=>{
    
    const pokemons = usePokemons()
    const [newPokemons,setNewPokemons] = useState(mockPockemons)
    async function checkPokemons(){
        const search = document.querySelector("#search")
        
        let timeOut = null
         clearTimeout(timeOut)
         timeOut = setTimeout(()=>{
            search.addEventListener("input",(e)=>{
                const searchInput = e.target.value
                console.log(searchInput)
                if(searchInput.length>=3){
                    
                    searchPokemons(searchInput,pokemons).then((response)=>{
                        
                    
                        return setNewPokemons(response)               
         })
                }
                else{

                  return  setNewPokemons(mockPockemons)

                } 
                
            })
         },[1000])
    }
    useEffect(()=>{
        checkPokemons()

    },[])

    return (
    <div>
        <FilterPokemons/>
        <div className='errorPokemons' style={newPokemons.length === 0?{display:"block"}:{display:"none"}}>nous  n avons pas encore ce pokemons</div>
        <div className="contenair">
            <div className="sous-contenair">
                {
                newPokemons.map(({id,name,picture,created,types})=>{
                        return(
                            <Pokemons id={id} name ={name}  picture = {picture} created={created} types ={types}/>
                        )

                    })
                }
            </div>
        </div>
    </div>)
}