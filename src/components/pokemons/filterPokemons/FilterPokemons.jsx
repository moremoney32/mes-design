import "./filterPokemons.css"
 export const FilterPokemons = ()=>{
    return (
        <div className="contenair-search">
            <div className="form-search">
                <label htmlFor="search">Rechercher un pokemon</label>
                <input type="text" name="search" id="search"/>
                <span></span>
            </div>
        </div>
    )
}