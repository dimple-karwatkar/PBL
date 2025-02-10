import axios from 'axios';

// const API_URL = "http://localhost:8080"; // Your backend server

// export const fetchRecommendations = async (userId) => {
//     try {
//         const response = await axios.get(`${API_URL}/api/recommendations/${userId}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching recommendations", error);
//         throw error;
//     }
// };


const api = axios.create({
    baseURL: 'http://localhost:8080', // Adjust to your actual API server
});

export const fetchRecommendations = async (userId) => {
    try {
        const response = await api.get(`/api/recommendations?userId=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw error;
    }
};
