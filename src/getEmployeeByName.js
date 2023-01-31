const { employees } = require('../data/employees_data');

function getEmployeeByName(...names) {
  if (names.length === 0) return undefined;
  const arrayTypes = names.map((name) => typeof name);
  const validaArray = arrayTypes.some((type) => type !== 'string');
  if (validaArray) return undefined;

  const arrayEstagiarios = employees.reduce(
    (newArray, e) => {
      return [
        ...newArray,
        ...e.estagiarios,
      ];
    },
    [],
  );

  let arrayResult = [];
  names.forEach((nameToSearch) => {
    
    const novoArrayFuncionarios = employees.filter((employee) => {
      return employee.nome === nameToSearch;
    });

    const novoArrayEstagiarios = arrayEstagiarios.filter((es) => {
      return es.nome === nameToSearch;
    });
    
    arrayResult = [
      ...arrayResult,
      ...novoArrayFuncionarios,
      ...novoArrayEstagiarios,
    ];

  });
  arrayResult.sort((a, b) => a.idade - b.idade);
  return arrayResult;
}

module.exports = getEmployeeByName;
