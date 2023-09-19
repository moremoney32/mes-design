/***format le style en fonction du type */
export function formatType(type) {
    const styles = {
      Feu: { backgroundColor: 'red', color: 'white',padding:"10px",borderRadius:"10px" },
      Eau: { backgroundColor: 'blue', color: 'white',padding:"10px",borderRadius:"10px" },
      Plante: { backgroundColor: 'green', color: 'white',padding:"10px",borderRadius:"10px" },
      Insecte: { backgroundColor: 'brown', color: 'white',padding:"10px",borderRadius:"10px" },
      Normal: { backgroundColor: 'grey', color: 'white',padding:"10px",borderRadius:"10px" },
      Vol: { backgroundColor: 'blue', color: 'white',padding:"10px",borderRadius:"10px" },
      Poison: { backgroundColor: 'purple', color: 'white',padding:"10px",borderRadius:"10px" },
      Fée: { backgroundColor: 'pink', color: 'white',padding:"10px",borderRadius:"10px" },
      Psy: { backgroundColor: 'purple', color: 'white',padding:"10px",borderRadius:"10px" },
      Electrik: { backgroundColor: 'lime', color: 'white',padding:"10px",borderRadius:"10px" },
      Combat: { backgroundColor: 'orange', color: 'white',padding:"10px",borderRadius:"10px" },  
    };
  
    // Vérifiez si le type a un style associé
    if (styles.hasOwnProperty(type)) {
      return styles[type]; // Renvoie le style correspondant
    } 
    else {
        // Si le type n'a pas de style associé, renvoyez un style par défaut
        return { backgroundColor: 'grey', color: 'black',padding:"10px",borderRadius:"10px" };
      }
  }