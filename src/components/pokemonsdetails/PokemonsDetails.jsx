import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState,useContext } from "react"
import { mockPockemons } from "../../helpers/mockPockemons"
import { SousDetails } from "../sousDetails/SousDetails"
import "./pokemonsdetails.css"
import "../sousDetails/sousdetails.css"
import { formatType } from "../../helpers/formatType"
import { formDate } from "../../helpers/formatDate"
import edit from "../../icons/edit.svg"
import { EditPokemons } from "../edit/EditPokemons"
import { useSelector } from "react-redux"

export function PokemonsDetails(){
    let {id} = useParams();
    const navigate = useNavigate();
    let [element,setElement]= useState()
    const editDonnee = useSelector( (state) => state?.infoPokemons?.donneesPokemons)
    console.log(editDonnee)
    
        
        useEffect(()=>{
    let objectDetails = mockPockemons.find((element)=>element.id === parseInt(id))
    console.log(objectDetails)
    if(objectDetails === undefined){
    return    navigate("/found");
        
    }
     setElement(objectDetails); 
      
        },[id, navigate]) 
        function editPokemons(id){
            
            return  navigate(`/edit/${id}`)
    
        }  
        useEffect(()=>{
            if(editDonnee){
                setElement(editDonnee); 
            }
        },[editDonnee]) 
        

    return(
        <div className="contenair-detail">
            <h1>{element?.name}</h1>
            <div className="sous-detail">
                <img src={element?.picture} alt={element?.name} />
                <img src={edit} alt="" className="edit" onClick={()=>editPokemons(element?.id)}/>
                <SousDetails nom = "Nom" name = {element?.name} backgroundColor="#fafafa"/>
                <SousDetails nom = "Points de vie" name = {element?.hp}/>
                <SousDetails nom = "Degats" name = {element?.cp} backgroundColor="#fafafa"/>
                         { <SousDetails nom = "Types" name = {element?.types.map((type,index)=>{
                                    return(
                                        
                                        <span key={index} style={formatType(type)}>{type}</span>
                                        
                                    )
                                    
                                })}/>}
                <SousDetails nom = "Date de creation" name = {formDate(element?.created)}/>
                <NavLink to ="/"><p className="retour">Retour</p></NavLink>
                          
            </div>
        </div>
    )

}