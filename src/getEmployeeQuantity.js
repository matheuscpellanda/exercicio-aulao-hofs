const { employees } = require('../data/employees_data');

function getEmployeeQuantity() {
  let total = 0;
  employees.forEach((employee) => {
    total += 1;
    employee.estagiarios.forEach(() => {
      total += 1;
    });
  });
  return total;
}

module.exports = getEmployeeQuantity;