import { refs } from './refs.js';
import fetchCountries from './fetchCountries.js';

var debounce = require('lodash.debounce');

fetchCountries(name);

refs.input.addEventListener('input', debounce(getInputValue, 500));
// refs.input.addEventListener('input', getInputValue);
function getInputValue(e) {
  let inputValue = e.target.value.trim();
  console.log(inputValue);
    if (!inputValue) {
      error404();
      return;
    }
}

