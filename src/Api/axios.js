import axios from 'axios';

const API = axios.create({
    baseURL : 'https://fmj07e9lhg.execute-api.us-east-1.amazonaws.com/dev',
})

export default API; 