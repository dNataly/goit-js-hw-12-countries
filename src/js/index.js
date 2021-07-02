import countryInfo from '../templates/full-country-info.hbs'

import { refs } from './refs.js';
import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { alert, success, error } from '../../node_modules/@pnotify/core';
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
  console.log(countries);
  // countries.forEach(country => {
    if (countries.length === 1) {
      refs.fullCountryInfo.insertAdjacentHTML('beforeend', countryInfo);
    } else if (countries.length >= 2 && countries.length < 10) {
      refs.result.insertAdjacentHTML('beforeend', `<li class="country-list-item">${country.name}</li>`);
    } else if (countries.length > 10) {
      refs.input.innerHTML = '';
      getErrorMsg();
    }
  // });
  }


function getCountryName(inputValue) {
  fetchCountries(inputValue).then(countries => renderMarkup(countries));
}

function reset() {
  refs.fullCountryInfo.innerHTML = '';
  refs.result.innerHTML = '';
}

function getErrorMsg() {
  error({
    text: 'Something went wrong! Please enter a valid country name.',
  });
  console.log("error");
}

