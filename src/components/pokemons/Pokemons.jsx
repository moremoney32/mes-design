
import { NavLink } from "react-router-dom"
import { formDate } from "../../helpers/formatDate"
import { formatType } from "../../helpers/formatType.js"
import "./pokemons.css"
import { FilterPokemons } from "./filterPokemons/FilterPokemons"

export function Pokemons({id,name,picture,created,types}){

     

    return(
        <>

                    <div  className="sous-bloc-contenair">
                        <NavLink to={`/pokemonDetails/${id}`}><img src={picture} alt={name} /></NavLink>
                        <div className="sous-bloc-contenair-infos">
                            <p>{name}</p>
                            <p>{formDate(created)}</p>
                            {
                                types.map((type,index)=>{
                                    return(
                                        
                                        <p key={index} style={formatType(type)}>{type}</p>
                                    )
                                    
                                })
                            }
                        </div>
                    </div>
        </>
    )

}