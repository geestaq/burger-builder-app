import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-1e49d.firebaseio.com/'
});

export default instance;
