import React from "react";

const FriendCard = props => {
  console.log(props.friends);
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendCard;
