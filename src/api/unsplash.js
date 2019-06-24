import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a5c4673816c6422c329ad93fddb184b7dede52ecbbba17e0096576067470dacb'
    }
});