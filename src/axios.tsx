import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://capi.envx.team/api/v1/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
});

export default instance;