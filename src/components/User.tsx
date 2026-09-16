import { useParams } from "react-router-dom";
import usersData from '../json/users.json';

function User() {
  let {id} = useParams()
  
  const user = usersData.users.find(u => u.id === Number(id));

  if (!user) {
    return <p>Utilisateur non trouvé</p>;
  }

  return <p>username is <p>{user.username}</p>  <img src={user.image} alt="user img" /></p>;
}

export default User;