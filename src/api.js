import axios from 'axios';

const API_KEY = 'c6279fba9868f9fa8dcb4913738f5c24'; // Remplacez par votre clé API TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des films :', error.message);
    return null;
  }
};