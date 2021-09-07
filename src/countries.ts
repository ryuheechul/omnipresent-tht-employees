import fetch from 'node-fetch';

export async function country(name: string) {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  const body = await response.json();

  return compact(body);
}

export async function countryByCode(code: string) {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
  const body = await response.json();

  return compact(body);
}

interface Currency {
  code: string;
}

interface Country {
 languages: {}[];
 currencies: Currency[];
 timezones: string[];
 name: string;
}

function compact(full: Country) {
  const { languages, currencies, timezones, name } = full;
  return {
    languages,
    currencies,
    timezones,
    name
  }
}
