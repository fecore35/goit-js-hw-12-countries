import getRefs from './js/refs';
// import API from './js/fetchCountries';
import AsyncAPI from './js/async-fetchCountries';
import tplCountries from './templates/list-country.hbs';
import tplCountry from './templates/card-country.hbs';
import debounce from 'lodash.debounce';
import { notificationStack, notificationTooManyCountries } from './js/notification';
import './sass/main.scss';

const refs = getRefs();

const onSearch = async event => {
  const inputValue = event.target.value;

  if (!inputValue) {
    renderResults('');
    notificationStack.close();
    return;
  }

  try {
    const countries = await AsyncAPI.aFetchCountries(inputValue);
    checkCountries(countries);
  } catch (error) {
    console.log(error);
  }
};

function checkCountries(data) {
  const countriesCount = data.length;
  let result = '';

  notificationStack.close();

  if (data.status === 404) {
    result = `<li class="list__item"><h2 class='list__name'>${data.message}</h2></li>`;
  }

  if (countriesCount >= 2 && countriesCount <= 10) {
    result = tplCountries(data);
  }

  if (countriesCount === 1) {
    result = tplCountry(data);
  }

  if (countriesCount > 10) {
    renderResults(result);
    notificationTooManyCountries();
  }

  renderResults(result);
}

function renderResults(result) {
  refs.results.innerHTML = result;
}

refs.form.addEventListener('submit', e => e.preventDefault());
refs.form.addEventListener('input', debounce(onSearch, 500));
