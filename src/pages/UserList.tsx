import { Link } from "react-router-dom";
import users from '../json/users.json';

function UserList() {

  return (
    <>
    {users.users.map((user) =>
      <div>
        <img src="" alt="image de l'utilisateur" />
        <p>last name : {user.username}</p>
        <Link to={`/user/${user.firstName}`}> go to user</Link>
      </div>
    )}
    </>
  );
}

export default UserList;