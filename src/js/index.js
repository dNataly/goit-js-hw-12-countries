import countryInfo from '../templates/full-country-info.hbs';

import { refs } from './refs.js';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { error } from '../../node_modules/@pnotify/core';
import fetchCountries from './fetchCountries.js';

var debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(getInputValue, 500));

refs.input.addEventListener('input', getInputValue);

function getInputValue(e) {
  let inputValue = e.target.value.trim();

  if (inputValue) {
      getCountryName(inputValue);
  }
}


function renderMarkup(countries) {
  reset();
  if (countries === undefined) {
    error({
      text: 'Something went wrong! Please enter a valid country name.',
      delay: 3200,
    });
    return;
  }
  else if (countries.length === 1) {
    let countryMarkup = countryInfo(countries);
    refs.fullCountryInfo.insertAdjacentHTML('beforeend', countryMarkup);
    return;
  } else if (countries.length >= 2 && countries.length < 10) {
    countries.forEach(country => {
      refs.result.insertAdjacentHTML('beforeend', `<li class="country-list-item">${country.name}</li>`);
    });
    return;
  } else if (countries.length > 10) {
    error({
      text: 'Too many matches.',
      delay: 3200,
    });
    return;
  }
}


function getCountryName(inputValue) {
  fetchCountries(inputValue).then(countries => renderMarkup(countries));
}

function reset() {
  refs.fullCountryInfo.innerHTML = '';
  refs.result.innerHTML = '';
}