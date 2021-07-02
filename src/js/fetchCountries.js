export default function fetchCountries(inputValue) {  
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`; 

    return fetch(url)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
      })     
};