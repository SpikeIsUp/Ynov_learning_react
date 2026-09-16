import { Link } from 'react-router-dom';
import './App.css';
import recipes from './json/recipes.json';

function App() {
  const savedUser = localStorage.getItem('user');
  const user = savedUser ? JSON.parse(savedUser) : null;

  return (
    <>
      <section id="center">
        <div>
          <p>{user ? `${user.firstName} ${user.lastName}` : 'Nom Prenom'}</p>
          <div className="galerie">
          {recipes.recipes.map((recipe) =>
            <div key={recipe.id}>
              <p>titre: {recipe.name}</p>
              <p>temps de préparation: {recipe.cookTimeMinutes} min</p>
              <Link to={`/${recipe.id}`}><img src={recipe.image} alt="image de la recette" /></Link>
            </div>
          )}
          </div>
        </div>
      </section>
    </>
  )
}

export default App