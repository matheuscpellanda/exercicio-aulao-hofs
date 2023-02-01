const { employees } = require('../data/employees_data');

function getEstagiarioByAge(idade) {
  if (!idade) return;
  if (typeof idade !== 'number') return;
  const arrayEstagiarios = employees.reduce(
    (newArray, e) => {
      return [
        ...newArray,
        ...e.estagiarios,
      ];
    },
    [],
  );

  return arrayEstagiarios.filter((e) => e.idade === idade);
}

module.exports = getEstagiarioByAge;