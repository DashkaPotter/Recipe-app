import {  useCallback,useEffect,useState} from 'react';
import './App.css';
import video from './food.mp4'
import Recipe from './recipe';



function App() {

  const MY_ID = "7391fdd1";
  const MY_KEY ="bef58dfcb3ff0fe0c10feaee88a8d114";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('salmon')

  const getRecipe = useCallback( async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits)
    console.log(data.hits)
  },[wordSubmitted])

  useEffect(()=> {
    getRecipe()
  },[getRecipe])

  const myRecipeSearch = (e) =>{
    console.log(e.target.value)
    setMySearch(e.target.value)
  }
  const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return (
    <div className="App">
      <div className="container">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>

          <h1>Find a Recipe</h1>
      </div>
      
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
        </form>
        

        <div className='container'>
          <button>
            <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="loupe" width="40px"/>
          </button>
        </div>
        </div>
        
        <div className='conatiner'>
        {
              myRecipes.map(element => {
                <Recipe label={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} ingredients={element.recipe.ingredientLines}/>
              })
            }
        
        </div>
            

      

      
    </div>
    
  );
}

export default App;
