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

  async addFriend(friend, setFriends) {
    const response = await FriendsService.addFriend(friend);
    setFriends(response.data);
  }

  async deleteFriend(id, setFriends) {
    const response = await FriendsService.deleteFriend(id);
    setFriends(response.data);
  }

  async cancelEditFriend(setEditFriend) {
    this._resetEditFriend(setEditFriend);
  }

  async editFriend(friend, setFriends, setEditFriend) {
    const response = await FriendsService.editFriend(friend);
    setFriends(response.data);
    this._resetEditFriend(setEditFriend);
  }

  _resetEditFriend(setEditFriend) {
    setEditFriend({
      editing: false,
      friend: {
        name: '',
        age: '',
        email: '',
      },
    });
  }
}

export default new FriendsState();
