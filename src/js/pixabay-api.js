import axios from 'axios';

const API_KEY = '23963114-6d0d5d874ae460d9125bacd21'; 
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}