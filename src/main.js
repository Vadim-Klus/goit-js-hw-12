import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './css/loader.css';
import './css/body.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let searchQuery = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  searchQuery = e.target.elements.searchQuery.value.trim();
  if (!searchQuery) return;

  clearGallery();
  hideLoadMoreButton();
  currentPage = 1;

  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.warning({ title: 'No results', message: 'No images found.' });
      hideLoader();
      return;
    }

    createGallery(data.hits);
    showLoadMoreButton();
  } catch (err) {
    iziToast.error({ title: 'Error', message: 'Failed to fetch images.' });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);
    createGallery(data.hits);

    if ((currentPage - 1) * 15 + data.hits.length >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    }

    const cardHeight = document.querySelector('.gallery-item').getBoundingClientRect().height;
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
  } catch (err) {
    iziToast.error({ title: 'Error', message: 'Failed to load more images.' });
  } finally {
    hideLoader();
  }
});