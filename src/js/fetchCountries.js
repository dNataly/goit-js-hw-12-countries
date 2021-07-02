import '../../node_modules/@pnotify/core/dist/BrightTheme.css';
import { alert, success, error } from '../../node_modules/@pnotify/core';

export default function fetchCountries(inputValue) {
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`; 

    return fetch(url)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
    })
  .catch(error => error({
    text: 'Something went wrong! Please enter a valid country name.',
  }))
};