import axios from 'axios';
import { BACKEND_URL } from '../config';

export const create = async (name, email, password) => {

    const body = { name, email, password };

    const response = await axios.post(`${BACKEND_URL}/blogs/create`, body);

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}
