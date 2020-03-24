import axios from "axios";
import React, { useEffect, useState } from "react";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("you messed up the axios get", err);
      });
  });

  return (
    <div>
      <p>wow</p>
    </div>
  );
};

export default FriendsList;
