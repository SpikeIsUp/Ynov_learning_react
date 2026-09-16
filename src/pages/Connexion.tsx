import { useState, type SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../json/users.json';
import '../user.css';

function Connexion() {
  const [nom, setNom] = useState('');
  const [mdp, setMdp] = useState('');
  const [erreur, setErreur] = useState('');

  const navigate = useNavigate();

  // Récupère l'utilisateur connecté depuis le localStorage
  const savedUser = localStorage.getItem('user');
  const user = savedUser ? JSON.parse(savedUser) : null;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const foundUser = usersData.users.find(
      (u) => u.username === nom && u.password === mdp
    );

    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      navigate('/');
    } else {
      setErreur('Nom dutilisateur ou mot de passe incorrect.');
    }
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate(0); // Rafraîchit la page pour mettre à jour l'état
  };

  return (
    <div>
      <h2>Connexion</h2>

      {user ? (
        <div>
          <p>Vous êtes connecté en tant que : <strong>{user.firstName} {user.lastName}</strong></p>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="champNom">Votre nom : </label>     
            <input
              id="champNom"
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Entrez votre pseudo"
              required
            />
          </p>
          
          <p>
            <label htmlFor="champMdp">Votre mot de passe : </label>
            <input
              id="champMdp"
              type="password"
              value={mdp}
              onChange={(e) => setMdp(e.target.value)}
              placeholder="Entrez votre mot de passe"
              required
            />
          </p>

          {erreur && <p style={{ color: 'red' }}>{erreur}</p>}

          <button type="submit">Se connecter</button>
        </form>
      )}
    </div>
  );
}

export default Connexion;