import axios from 'axios';

const API = axios.create({
    baseURL : 'https://2evfwh96lk.execute-api.us-east-1.amazonaws.com',
})

export default API; 