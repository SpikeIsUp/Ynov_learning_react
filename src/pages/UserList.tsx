import { Link } from "react-router-dom";
import users from '../json/users.json';
import '../user.css';

function UserList() {

  return (
    <>
    <div className="users">
    {users.users.map((user) =>
      <div>
        <img src={user.image} alt="image de l'utilisateur" />
        <p>pseudo: {user.username}</p>
        <Link to={`/user/${user.id}`}> go to user</Link>
      </div>
    )}
    </div>
    </>
  );
}

export default UserList;