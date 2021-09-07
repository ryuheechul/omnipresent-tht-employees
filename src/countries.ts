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
 region: string;
}

function compact(full: Country) {
  const { languages, currencies, timezones, name, region } = full;
  return {
    languages,
    currencies,
    timezones,
    name,
    region,
  }
}

async function countryByCodeWithCode(code: string) {
  const result: any = {};
  result[code] = await countryByCode(code);
  return result;
}

export async function countriesByCodes(codes: string[]) {
  const csSet = new Set(
    codes.map(c => c.toUpperCase())
  );

  const cs = Array.from(csSet);

  return (
    await Promise.all(
      cs
        .map(async (code) => await countryByCodeWithCode(code))
    )
  ).reduce((acc, o) => ({ ...acc, ...o }));
}
