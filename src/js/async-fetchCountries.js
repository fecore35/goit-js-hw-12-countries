const BASE_URL = 'https://restcountries.eu';

const aFetchCountries = async function (searchQuery = 'Afghanistan') {
  const response = await fetch(`${BASE_URL}/rest/v2/name/${searchQuery}`);
  const countries = response.json();
  return countries;
};

export default { aFetchCountries };
