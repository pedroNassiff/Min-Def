import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "config/apiUrl";

class ApiService {

  //pedirs users
  get(route) {
    return axios.get(API_URL + route, { headers: authHeader() })
  }

  post(route, body) {
    return axios.post(API_URL + route, body, {
        headers: authHeader(),
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return {err, data: {msg: 'Server error!!!'}};
      });
  }

  put(route, id, body) {
    return axios
      .put(API_URL + route + '/' + id, body, {
        headers: authHeader(),
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return {err, data: {msg: 'Server error!!!'}};
      });
  }

  delete(route, id) {
    return axios.delete(API_URL + route + '/' + id, { headers: authHeader() })
  }
}
export default new ApiService();
