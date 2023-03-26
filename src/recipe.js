function Recipe({label,image,calories}){
    return (
         <div>
            <div  className="container">
            <h3>{label}</h3>
            </div>

            <div  className="container">
            <img src={image} alt='recipe'/>
            </div>

            <ul className="list">
                {ingredients.map(ingredient => {
                    <li className="icon">{ingredient}</li>
                })}
            </ul>

            <div  className="container">
                
            <p className="par">{calories.toFixed()} calories</p>
            </div>
            
            
        </div>
    )
}
export default Recipe;
