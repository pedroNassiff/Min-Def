import axios from "axios"
import API_URL from "config/apiUrl"

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "auth/signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.removeItem("user");
          localStorage.removeItem("userfecha");
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userfecha", new Date());
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userfecha");
    window.location.reload();
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService()