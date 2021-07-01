

// fetch('https://restcountries.eu/rest/v2/name/{name}')
//   .then(response => {
//     //response handling
//   })
//   .then(data => {
//     // data handling
//   })
//   .catch(error => {
//     // error handling
//   });

export default function fetchCountries(inputValue) {
  return fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}