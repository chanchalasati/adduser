import './App.css';
import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const addUserHandler = (name, age) => {

    setUserDetails((prevState) => {
      return [...prevState, { name: name, age: age, id: Math.random.toString() }]
    })
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userDetails} />
    </>
  );
}

export default App;
