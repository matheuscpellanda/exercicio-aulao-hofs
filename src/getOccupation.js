const { employees } = require('../data/employees_data');

function getOccupation() {
  //  - Inicializo uma variável 'arrayOccupations' do tipo array
  //  para receber as profissões encontradas.
  const arrayOccupations = [];
  employees.forEach((employee) => {
    //  - Confere se essa profissão já foi inserida ou não
    if (!arrayOccupations.includes(employee.cargo)) {
      //  - Caso essa profissão não tenha sido inserida anteriormente,
      //  ela será inserida agora.
      arrayOccupations.push(employee.cargo);
    }
  });
  //  - Organiza o array em ordem alfabética.
  arrayOccupations.sort()
  return arrayOccupations;
}

module.exports = getOccupation;