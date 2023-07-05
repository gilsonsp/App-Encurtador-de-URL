//Minha Chave: b8e47a853d0fbf39a289a3db7641e40d4be9796d

import axios from 'axios';

export const key = "b8e47a853d0fbf39a289a3db7641e40d4be9796d";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;