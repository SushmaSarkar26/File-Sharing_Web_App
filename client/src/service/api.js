import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        // const response = await axios.post(`/upload`, data);
        return response.data;
    } catch (error) {
        return error;
    }
}