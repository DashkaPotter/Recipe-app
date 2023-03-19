function Recipe({label,image,calories}){
    return (
        <div>
            <h3>{label}</h3>
            <img src={image} alt='recipe photo'/>
            <p>{calories.toFixed()}</p>
        </div>
    )
}
export default Recipe;