import React, { useState, useEffect } from 'react';

import FriendsState from '../services/FriendsState';

import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';

const emptyEditFriend = {
  editing: false,
  friend: {
    name: '',
    age: '',
    email: '',
  },
};

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [editFriend, setEditFriend] = useState(emptyEditFriend);

  useEffect(() => {
    FriendsState.fetchFriends(setFriends);
  }, []);

  return (
    <>
      <FriendsForm setFriends={setFriends} editFriend={editFriend} setEditFriend={setEditFriend} />
      <FriendsList friends={friends} setFriends={setFriends} setEditFriend={setEditFriend} />
    </>
  );
}

export default Friends;
