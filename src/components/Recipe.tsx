import { useParams } from "react-router-dom";
import recipesData from '../json/recipes.json';

function Recipe() {
  let {id} = useParams()
  
  const recipe = recipesData.recipes.find(u => u.id === Number(id));

  if (!recipe) {
    return <p>Utilisateur non trouvé</p>;
  }

  return <p><img src={recipe.image} alt="user img" /> <p>Nom: {recipe.name}</p>  <p>temps de préparation: {recipe.prepTimeMinutes}</p><p>Temps de cuisson: {recipe.cookTimeMinutes}</p><p>Ingrédients: {recipe.ingredients}</p><p>Instructions: {recipe.instructions}</p></p>;
}

export default Recipe;
