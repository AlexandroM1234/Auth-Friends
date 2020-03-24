import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWtihAuth";
const FriendForm = () => {
  const [newFriend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(response => {
        console.log(response);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Friend Name</label>
        <input name="name" onChange={handleChange} />

        <label>Age</label>
        <input name="age" onChange={handleChange} />

        <label>Email</label>
        <input name="email" onChange={handleChange} />

        <button>Submit New Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
