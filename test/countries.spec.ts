import { equal } from "assert";
import { countryByCode } from '../src/countries';

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
