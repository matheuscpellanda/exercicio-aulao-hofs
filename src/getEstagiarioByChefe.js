const { employees } = require('../data/employees_data');

function getEstagiarioByChefe(nome) {
  if (!nome) return;
  if (typeof nome !== 'string') return;

  // const teste = employees.reduce((acc, cur) => {
  //   return [...acc, ...cur.estagiarios];
  // }, []);

  const chefes = employees.filter((e) => e.nome === nome);
  if (chefes.length === 0) return;

  const array = chefes.map((c) => c.estagiarios);

  const arrayEstagiarios = [];
  array.forEach((a) => {
    a.forEach((estagiario) => {
      arrayEstagiarios.push(estagiario);
    });
  });

  arrayEstagiarios.sort((a, b) => a.nome.localeCompare(b.nome));
  // if(a.nome < b.nome) return -1;
  // if(a.nome > b.nome) return 1;
  // return 0;
  return arrayEstagiarios;
}

module.exports = getEstagiarioByChefe;