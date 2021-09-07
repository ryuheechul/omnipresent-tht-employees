import employees from '../data/employees.json';
import { countriesByCodes } from './countries';

export async function polish() {
  const codes = employees.map(({country}) => country);

  const countries = await countriesByCodes(codes);

  const updatedEmployees = employees.map(emp => ({
    ...emp,
    country: countries[emp.country],
  }));

  return updatedEmployees;
}
