import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './css/loader.css';



const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');


  
form.addEventListener('submit', async event => {
    event.preventDefault();
    const query = event.target.elements['search-text'].value.trim();
  
    if (!query) {
      iziToast.warning({ message: 'Enter search text!', position: 'topRight' });
      return;
    }
  
    clearGallery();
    showLoader();
  
    try {
      const data = await getImagesByQuery(query);
      if (!data.hits.length) {
        iziToast.info({ message: 'No results found.', position: 'topRight' });
        return;
      }
      createGallery(data.hits);
    } catch (error) {
      iziToast.error({ message: 'Something went wrong.', position: 'topRight' });
    } finally {
      hideLoader();
    }
  });