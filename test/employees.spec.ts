import chai from "chai";

import { polish } from '../src/employees';

describe("polish", () => {
  it("check keys for all", async () => {
    const employees = await polish();

    employees.forEach(employee => {
      chai.assert.hasAllKeys(employee, [
        'firstName',
        'lastName',
        'dateOfBirth',
        'jobTitle',
        'company',
        'country',
      ]);
    });
  });
});
