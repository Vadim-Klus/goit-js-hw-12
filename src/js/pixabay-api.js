import axios from 'axios';

const API_KEY = '23963114-6d0d5d874ae460d9125bacd21';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };
  
    return axios.get(BASE_URL, { params })
      .then(response => response.data)
      .catch(error => {
        console.error('❌ Error fetching data:', error.message);
        throw error;
      });
  }




