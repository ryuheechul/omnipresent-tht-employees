import employees from '../data/employees.json';
import { countriesByCodes } from './countries';

export interface Employee {
  country: any;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  additionalIdentifier?: string;
}

function addIdentifier(employee: Employee) {
  const {
    firstName,
    lastName,
    dateOfBirth,
    country: { region }
  } = employee;

  if (!['Europe', 'Asia'].includes(region)) {
    return employee;
  }

  const additionalIdentifier = `${firstName}${lastName}${dateOfBirth.replace(/\//g, '')}`;

  return {
    ...employee,
    additionalIdentifier,
  };
}

export async function polish(): Promise<Employee[]> {
  const codes = employees.map(({country}) => country);

  const countries = await countriesByCodes(codes);

  const updatedEmployees = employees
    .map(employee => ({
      ...employee,
      country: countries[employee.country],
    }))
    .map(addIdentifier);

  return updatedEmployees;
}
