import axios from "axios";
import authHeader from "./AuthHeader";
import API_URL from "config/apiUrl";

class ApiService {

  uploadNoticia(formData) {
    try {
      return axios.post(API_URL + 'apiUpload/uploadNoticia', formData,
      { 
        headers: authHeader() 
      }
      ).then(response => {
        console.log('anda');
        return response.data;
      }).catch((err) => {
        return { err, data: { noticias: [] } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

  uploadBiblioteca(formData) {
    try {
      console.log('uploadBiblioteca: ',formData);
      return axios.post(API_URL + 'apiUpload/uploadBiblioteca', formData,
      { 
        headers: authHeader() 
      }
      ).then(response => {
        console.log('anda');
        return response.data;
      }).catch((err) => {
        return { err, data: { noticias: [] } };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

  getNoticia() {
    try {
      return axios.get(API_URL + 'apiUpload/getNoticia',
      { 
        headers: authHeader() 
      }
      ).then(response => {
        console.log('anda noticias');
        return response.data;
      }).catch((err) => {
        return {noticias: [] };
      });

    } catch (error) {
      console.log('error: ', error);
    }
  }

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
