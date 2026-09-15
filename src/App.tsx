import { Link } from 'react-router-dom';
import './App.css';
import recipes from './json/recipes.json';

function App() {

  return (
    <>
      <section id="center">
        <div>
          <p>Nom Prenom</p>
          <div className="galerie">
          {recipes.recipes.map((recipe) =>
            <div>
              <p>titre: {recipe.name}</p>
              <p>temps de préparation: {recipe.cookTimeMinutes}</p>
              <Link to={`/recipe/${recipe.name}`}> Choisir</Link>
              <img src={recipe.image} alt="image de la recette" />
            </div>
          )}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
