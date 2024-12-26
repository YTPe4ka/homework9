import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const { users, deleteUser, editUser } = useContext(UserContext);

  return (
    <div className="users">
      <h2>Users</h2>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button
              onClick={() => {
                const newName = prompt("Enter new name:", user.name);
                if (newName) editUser(user.id, { name: newName });
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
