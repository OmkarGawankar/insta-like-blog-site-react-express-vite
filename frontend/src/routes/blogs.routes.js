import axios from 'axios';
import { BACKEND_URL } from '../config';

export const createBlog = async (userId, blog) => {

    const response = await axios.post(`${BACKEND_URL}/blogs/create?userId=${userId}`, blog);

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}

export const getAllBlogs = async () => {

    const response = await axios.post(`${BACKEND_URL}/blogs/all`);

    if (response.status !== 200) {
        throw new Error(response.data.message);
    }

    return response.data;
}