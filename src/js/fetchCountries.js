const BASE_URL = 'https://restcountries.eu';

const fetchCountries = function (searchQuery = 'Afghanistan') {
  return fetch(`${BASE_URL}/rest/v2/name/${searchQuery}`).then(response => response.json());
};

export default { fetchCountries };
