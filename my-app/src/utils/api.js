import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/shows';

export const fetchAllShows = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    return [];
  }
};

export const fetchShowById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching show with id ${id}:`, error);
    return null;
  }
};