import  "./sousdetails.css"
export function SousDetails({nom,name,backgroundColor,fontSize}){
    const styles = {
        backgroundColor: backgroundColor || 'white', // Par défaut à 'white' si la prop n'est pas définie
        fontSize: fontSize || '16px', // Par défaut à '16px' si la prop n'est pas définie
      };
    return (
        <div className="sous-detail-detail" style={styles}>
            <span>{nom}</span>
            <span>{name}</span>
        </div>
    )
}
