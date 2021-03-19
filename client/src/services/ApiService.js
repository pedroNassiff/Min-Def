import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "config/apiUrl";

class ApiService {

  upload(formData) {
    try {
      return axios.post(API_URL + 'apiUpload/upload', formData,
      { 
        headers: authHeader() 
      }
      ).then(response => {
        return response.data;
      }).catch((err) => {
        return { err, data: { msg: 'Server error!!!' } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }
  

}
export default new ApiService();
