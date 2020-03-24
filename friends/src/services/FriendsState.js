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
}

export default new FriendsState();
