import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addNewUserHandler = (user) => {
    setUsersList((prevUser) => {
      return [...prevUser, user];
    });
  };
  return (
    <div>
      <AddUser addUser={addNewUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
