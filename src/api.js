import axios from 'axios';

const API_KEY = '42599811-7807d1d86e818fa49dcd65999';
const API_URL = 'https://pixabay.com/api/';

export const fetchImages = async (searchTerm, page = 1) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: searchTerm,
        page: page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};