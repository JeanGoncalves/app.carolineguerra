import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-carolineguerra.herokuapp.com',
});

export default api
