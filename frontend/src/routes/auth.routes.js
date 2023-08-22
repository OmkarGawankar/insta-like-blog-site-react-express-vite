import axios from 'axios';

const API_URL = 'http://localhost:8082/api/auth/';

export const register = async (name, email, password) => {

    const body = { name, email, password };

    const response = await axios.post(API_URL + 'register', body);

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}

export const login = async (email, password) => {

    const body = { email, password };

    const response = await axios.post(API_URL + 'login', body);

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}
