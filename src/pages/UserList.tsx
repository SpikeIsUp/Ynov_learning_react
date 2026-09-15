import { Link } from "react-router-dom";

function UserList() {
  const users = [
  { 
    "first_name": "Sirine",
    "last_name": "Bismila"
  },
  {
    "first_name": "Thomas",
    "last_name": "Veggi"
  },
  {
    "first_name": "Dina",
    "last_name": "Calomnie"
  }
  ];

  return (
    <>
    {users.map((user) =>
      <div>
        <p>name : {user.first_name}</p>
        <p>last name : {user.last_name}</p>
        <Link to={`/user/${user.first_name}`}> go to user</Link>
      </div>
    )}
    </>
  );
}

export default UserList;