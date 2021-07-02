import countryInfo from '../templates/full-country-info.hbs';

import { refs } from './refs.js';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { error } from '../../node_modules/@pnotify/core';
import fetchCountries from './fetchCountries.js';

var debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(getInputValue, 500));

// refs.input.addEventListener('input', getInputValue);

function getInputValue(e) {
  let inputValue = e.target.value.trim();

  getCountryName(inputValue);
}


function renderMarkup(countries) {
  reset();
  if (countries.length === 1) {
    let countryMarkup = countryInfo(countries);
    refs.fullCountryInfo.insertAdjacentHTML('beforeend', countryMarkup);
  } else if (countries.length >= 2 && countries.length < 10) {
    countries.forEach(country => {
      refs.result.insertAdjacentHTML('beforeend', `<li class="country-list-item">${country.name}</li>`);
    })
  } else if (countries.length > 10) {
    refs.input.innerHTML = '';
    getErrorMsg();
  }
  if (countries.status === 404 || countries.length === undefined) {
    error({
      title: 'Country not found',
      text: 'Please try again',
    });
  }
}


function getCountryName(inputValue) {
  fetchCountries(inputValue).then(countries => renderMarkup(countries));
}

function getErrorMsg() {
  error({
    text: 'Something went wrong! Please enter a valid country name.',
  })
}

function reset() {
  refs.fullCountryInfo.innerHTML = '';
  refs.result.innerHTML = '';
}