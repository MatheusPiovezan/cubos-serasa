import axios from 'axios';

export default axios.create({
    baseURL: 'https://cubos-serasa-spc.herokuapp.com',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
});