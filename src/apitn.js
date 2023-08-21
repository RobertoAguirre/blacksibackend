const axios = require('axios')
const baseURL = process.env.TIENDANUBEAPIURL;

const api = axios.create({ baseURL });
api.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authentication': process.env.AUTHENTICATION_TOKEN_HEADER,
        "User-Agent": "Testing (jonatancalebrico@gmail.com)"
    }
    return config;
})

exports.api = api