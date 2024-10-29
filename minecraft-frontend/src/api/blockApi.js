// minecraft-frontend/src/api/blockApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blocks';

export const getBlocks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getBlockById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
