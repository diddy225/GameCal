import axios from 'axios'

export default {
  login: userData => 
    axios.post('/login', userData),
  signUp: userData => 
    axios.post('/signup', userData),
  dashboard: token =>
    axios.get('/dashboard', {headers: {Authorization: `bearer ${token}`}})
}