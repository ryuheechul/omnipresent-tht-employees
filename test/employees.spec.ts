import chai, { expect } from "chai";

import { polish, Employee } from '../src/employees';
let employees: Employee[];

before(async() => {
  employees = await polish();
});

describe("polish", () => {
  it("check keys for all", () => {
    employees.forEach(employee => {
      [
        'firstName',
        'lastName',
        'dateOfBirth',
        'jobTitle',
        'company',
        'country',
      ].forEach(property => {
        expect(employee).to.have.property(property);
      });

      const { country: { region } } = employee;

      if (['Europe', 'Asia'].includes(region)) {
        expect(employee).to.have.property(
          'additionalIdentifier'
        );
      }
    });
  });

  it("Lisa", async () => {
        expect(
      employees[1].additionalIdentifier
        ).to.be.equal(
      'lisatestora11071984'
    );
  });
});
