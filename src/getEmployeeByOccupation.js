const { employees } = require('../data/employees_data');
const getOccupation = require('./getOccupation');

function getEmployeeByOccupation(occupation) {
  if (typeof occupation !== 'string') return undefined;
  if (!getOccupation().includes(occupation)) return undefined;
  const arrayEmployees = employees.filter((employee) => {
    return employee.cargo === occupation;
  })
  arrayEmployees.sort((a, b) => {
    return a.idade - b.idade;
  });
  return arrayEmployees;
}

module.exports = getEmployeeByOccupation;