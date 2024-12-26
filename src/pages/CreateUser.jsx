import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const CreateUser = () => {
  const { addUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.age) {
      addUser(formData);
      setFormData({ name: "", email: "", age: "" });
    }
  };

  return (
    <div className="create-user">
      <h2>Create-User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default CreateUser;
