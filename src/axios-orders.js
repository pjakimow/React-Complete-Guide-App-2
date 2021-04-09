import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-96b69-default-rtdb.firebaseio.com/'
});

export default instance;
