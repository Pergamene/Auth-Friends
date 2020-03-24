import axios from 'axios';

const baseURL = new URL('http://localhost:5000/');

class FriendsService {
  async friendsLogin(credentials) {
    const response = await this._createBaseRequest().post(baseURL + 'api/login', credentials);
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
