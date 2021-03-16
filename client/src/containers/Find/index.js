import {useState, useEffect} from 'react';
import TheNav from '../../components/NavBar';

function Find (){
    const [recipes, setRecipes] = useState([{
     recipe_name: '',
     author_name: ''
    }])

    useEffect(()=> {
        fetch("http://localhost:8080/get").then(res=> {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setRecipes(jsonRes))
    })
    return (
        <>
        <TheNav/>
            {recipes.map(recipe => 
                <div>
                    <h1>{recipe.recipe_name}</h1>
                    <p>{recipe.author_name}</p>
                </div>
                )}
        </>
    )
}

export default Find;