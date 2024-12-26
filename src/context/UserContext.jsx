import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)));
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};
