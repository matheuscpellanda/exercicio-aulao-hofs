const { employees } = require('../data/employees_data');

// O CPF deve ser passado como 'string'
function getEmployeeByCpf(...cpfs) {
  if (cpfs.length === 0) return undefined;
  const arrayTypes = cpfs.map((name) => typeof name);
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

  const arrayTodosFuncionarios = [
    ...employees,
    ...arrayEstagiarios,
  ];

  let arrayResult = [];

  cpfs.forEach((cpf) => {
    const resultFilter = arrayTodosFuncionarios.filter((func) => func.cpf === cpf);

    arrayResult = [
      ...arrayResult,
      ...resultFilter,
    ];
  });

  arrayResult.sort((a, b) => a.nome.localeCompare(b.nome));
  // if(a.nome < b.nome) return -1;
  // if(a.nome > b.nome) return 1;
  // return 0;
  return arrayResult;
}

module.exports = getEmployeeByCpf;