import axios from 'axios';
import { BACKEND_URL } from '../config';

export const register = async (name, email, password) => {

    const body = { name, email, password };

    const response = await axios.post(`${BACKEND_URL}/register`, body);

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}

export const login = async (email, password) => {

    const body = { email, password };

    const response = await axios.post(`${BACKEND_URL}/login`, body);

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}
