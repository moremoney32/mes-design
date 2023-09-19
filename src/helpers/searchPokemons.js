import { normalize } from "./normalize"

export const searchPokemons = (inputSearch,arrayPokemons)=>{
    return new Promise((resolve) => {
        inputSearch = normalize(inputSearch)

        function searchNamePokemons(){
            return new Promise((resolve)=>{
                const searchNamespokemons = arrayPokemons.filter((pokemon)=>{
                    if(pokemon.name.toLowerCase().includes(inputSearch) === true){
                        return pokemon
                    }
                })
               return resolve(searchNamespokemons)

            })
        }
        function searchTypesPokemons(){

            return new Promise((resolve)=>{

                 const searchTypes = arrayPokemons.filter((recipe)=>{

                     if(recipe.types.map((type)=>type.toLowerCase()).includes(inputSearch) === true){
                                
                            return recipe;

                     }

                      
                 });
                 
                 return resolve(searchTypes);
            });

       }
       Promise.all([searchNamePokemons(),searchTypesPokemons()]).then((response)=>{
        response =[...response[0],...response[1]]

        const filterDoublon = [... new Set(response)]
        return resolve(filterDoublon)

    })
        
    })
}