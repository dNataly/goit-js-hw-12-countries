import { refs } from './refs.js';
import fetchCountries from './fetchCountries.js';
import pnotify from './pnotify.js'
var debounce = require('lodash.debounce');

function a () {
  new pnotify({
    title: 'Simple Notification',
    text: "Hey, I'm a simple notification.",
  });
};

a();
refs.input.addEventListener('input', debounce(getInputValue, 500));

// refs.input.addEventListener('input', getInputValue);

function getInputValue(e) {
  let inputValue = e.target.value.trim();

  getCountryName(inputValue);
}


function renderMarkup(countries) {
  reset();
  console.log(countries);
  countries.forEach(country => {
    if (countries.length === 1) {
      refs.fullCountryInfo.insertAdjacentHTML(
        'beforeend',
        `<h1 class="country-name">${country.name}</h1>
        <div class="country-info-wrap">
          <ul class="country-info-list">
            <li class="country-info-items">Capital: ${country.capital}</li>
            <li class="country-info-items">Population: ${country.population}</li>
            <li class="country-info-items"> Languages: 
              <ul class="lang-wrap">${country.languages.name}</ul>
            </li>
          </ul>
          <div class="country-flag"><img src="${country.flag}" alt="Flag of the country"</div>
        </div>`,
      );
    } else if (countries.length >= 2 && countries.length < 10) {
      refs.result.insertAdjacentHTML('beforeend', `<li class="country-list-item">${country.name}</li>`);
    } else if (countries.length > 10) {
      console.log('Too many matches found');
    }
  });
  }


function getCountryName(inputValue) {
  fetchCountries(inputValue).then(countries => renderMarkup(countries));
}

function reset() {
  refs.fullCountryInfo.innerHTML = '';
  refs.result.innerHTML = '';
}