import FriendsService from './FriendsService';

class FriendsState {
  async friendsLogin(credentials) {
    const response = await FriendsService.friendsLogin(credentials);
    if (response.status === 200) {
      localStorage.setItem('token', JSON.stringify(response.data.payload));
      return true;
    }
    return false;
  }

  async fetchFriends(setFriends) {
    const response = await FriendsService.fetchFriends();
    setFriends(response.data);
  }

  async addFriend(friend, setFriend) {
    const response = await FriendsService.addFriend(friend);
    console.log('RESPONSE (in addFriend): ', response);
    setFriend(response.data);
  }
}

export default new FriendsState();
