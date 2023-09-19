import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { formatType } from "../../helpers/formatType"
import { mockPockemons } from "../../helpers/mockPockemons"
import "./editpokemons.css"
import { useDispatch } from "react-redux";
import { setDonneesPokemons } from "../../appRedux/features/detailsPokemonsSlice";
import { formDate } from "../../helpers/formatDate";
export function EditPokemons(){
    let {id} = useParams();
    const form = mockPockemons.find((element)=>element.id === parseInt(id))
    const [object,setObject] = useState({
        name:form?.name,
        hp:form?.hp,
        cp:form?.cp,
        types:form?.types,
        picture:form?.picture,
        created:form?.created

    });
    console.log(object)
    const dispach = useDispatch();
    const navigate = useNavigate();
    
    const types = [
        "Feu",
      "Eau",
      "Plante",
      "Insecte",
      "Normal",
      "Vol",
      "Poison",
      "Fée",
      "Psy",
      "Electrik",
      "Combat"
    ]
    const connectType = (type)=>{
            if(object?.types?.includes(type) === true){
                return type
            }
    }
    const handleChange = (e,type)=>{
        const { name, value,checked } = e.target;
        if(name === "types"){
            if(checked){
                // const field = object?.types.concat([type]),meme cette methode fonctionne
                //  return    setObject((object)=>({...object,types:field}))
             return   setObject((object)=>({...object,types:[...object?.types,type]}))
            }
            else{
             return    setObject((object)=>({...object,types:object?.types.filter((element)=>element !== type)}))
            }
        }
        setObject((object)=>({...object,[name]:value}))

       
    }
  const  handleSubmit = (e)=>{
        e.preventDefault();
        console.log(object)
        dispach(setDonneesPokemons(object));
      return navigate(`/pokemonDetails/${id}`)
    }
   
    return (
        <div className="contenair-edit">
            <h1>{form?.name}</h1>
            <div className="sous-contenair-edit">
                <img src={object?.picture} alt={object?.name} />
            </div>
            <form  onSubmit={e=>handleSubmit(e)} className="form">
                <div className="space">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="nom" name="name" value={object?.name}
                      onChange={e =>handleChange(e)}/>
                </div>
                <div className="space">
                <label htmlFor="vie">Point de vie</label>
                    <input type="number" id="vie" name="hp" value={object?.hp}
                 onChange={e =>handleChange(e)}/>
                </div>
                <div className="space">
                <label htmlFor="degats">Degats</label>
                    <input type="number" id="degats" name="cp" value={object?.cp}
                    onChange={e =>handleChange(e)}/>
                </div>
                <h2 className="h2-edit">Types</h2>
                {
                    types.map((type)=>{
                        return(
                            <div className="space-check" key={type}>
                                <input type="checkbox" name ="types" value={type} checked ={connectType(type)}
                                
                                onChange={e =>handleChange(e,type)}/>
                                <span style={formatType(type)}>{type}</span>
                            </div>
                        )
                    })

                }
                <button  type="submit" className="button">Valider</button>
            </form>
        </div>
    )
}