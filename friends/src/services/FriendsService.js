import axios from 'axios';

class FriendsService {
  async friendsLogin(credentials) {
    const response = await this._createBaseRequest().post('api/login', credentials);
    return response;
  }

  async fetchFriends() {
    const response = await this._createBaseRequest().get('api/friends');
    return response;
  }

  async addFriend(friend) {
    const response = await this._createBaseRequest().post('api/friends', friend);
    return response;
  }

  async deleteFriend(id) {
    const response = await this._createBaseRequest().delete('api/friends/' + id);
    return response;
  }

  async editFriend(friend) {
    const { name, age, email, id } = friend;
    const response = await this._createBaseRequest().put('api/friends/' + id, {name, age, email});
    return response;
  }

  _createBaseRequest() {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.create({
      baseURL: 'http://localhost:5000/',
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new FriendsService();
