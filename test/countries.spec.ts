import { equal } from "assert";
import chai from "chai";

import {
  countryByCodes,
  countryByCode
} from '../src/countries';

describe("countryByCode", () => {
  it("gbr", async () => {
    const country = await countryByCode('GBR');

    equal(
      'GBP',
      country.currencies[0].code
    );
  });

  it("GBR", async () => {
    const country = await countryByCode('GBR');
    equal(
      'GBP',
      country.currencies[0].code
    );
  });
});

describe("countryByCodes", () => {
  it("gbr, GBR, US", async () => {
    const result = await countryByCodes(['gbr','GBR', 'US']);

    chai.assert.hasAllKeys(result, ['US', 'GBR']);
  });
});
