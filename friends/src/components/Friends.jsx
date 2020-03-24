import React, { useState, useEffect } from 'react';

import FriendsState from '../services/FriendsState';

import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    FriendsState.fetchFriends(setFriends);
  }, []);

  return (
    <>
      <FriendsForm setFriends={setFriends} />
      <FriendsList friends={friends} />
    </>
  );
}

export default Friends;
