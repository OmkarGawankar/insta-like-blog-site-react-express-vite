import axios from 'axios';
import { BACKEND_URL } from '../config';

export const getStatistics = async () => {

    const response = await axios.post(`${BACKEND_URL}/statistics/all`);

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}
