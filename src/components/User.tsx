import { useParams } from "react-router-dom";

function User() {
  let {username} = useParams()
  return (<p>username is {username}</p>);
}

export default User;