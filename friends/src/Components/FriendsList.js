import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWtihAuth";
import FriendCard from "../Components/FriendCard";
import FriendForm from "./FriendForm";
const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => {
        console.log("you messed up the axios get", err);
      });
  }, []);

  return (
    <div>
      <FriendForm />
      <FriendCard key={friends.id} friends={friends} />
    </div>
  );
};

export default FriendsList;
