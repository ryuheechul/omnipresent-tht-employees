import chai, { expect } from "chai";

import {
  countriesByCodes,
  countryByCode
} from '../src/countries';

describe("countryByCode", () => {
  it("gbr", async () => {
    const country = await countryByCode('gbr');

    expect(
      country.currencies[0].code
    ).to.be.equal('GBP');
  });

  it("GBR", async () => {
    const country = await countryByCode('GBR');

    expect(
      country.currencies[0].code
    ).to.be.equal('GBP');
  });
});

describe("countriesByCodes", () => {
  it("gbr, GBR, US", async () => {
    const result = await countriesByCodes(['gbr','GBR', 'US']);

    chai.assert.hasAllKeys(result, ['US', 'GBR']);
  });
});
