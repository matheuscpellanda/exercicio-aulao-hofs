const getEmployeeByName = require('../src/getEmployeeByName');

describe('3 - Implemente a função \'getEmployeeByName\' que deve buscar por pessoas colaboradoras através de seu nome.', () => {

  it('A função deve retornar undefined caso não receba parâmetros ou receba parâmetros inválidos.', () => {
    expect(getEmployeeByName()).toBeUndefined();
    expect(getEmployeeByName(3)).toBeUndefined();
  });

  it('A função deve retornar um array vazio caso não encontre nenhum funcionário com o nome informado.', () => {
    expect(getEmployeeByName('Qualquer funcionário')).toEqual([]);
  });

  it('O array retornado deve estar organizado em ordem crescente de idade.', () => {
    const result01 = [
      {
        cpf: '11165847101',
        nome: 'Gabriel',
        idade: 19,
        genero: 'masculino',
        cargo: 'Estagiário(a)',
      },
      {
        cpf: '32114578998',
        nome: 'Gabriel',
        idade: 38,
        genero: 'masculino',
        cargo: 'Vendedor(a)',
        estagiarios: [],
      },
    ];
    const result02 = [
      {
        cpf: '61234554120',
        nome: 'Lucas',
        idade: 36,
        genero: 'masculino',
        cargo: 'Gerente de Marketing',
        estagiarios: []
      },
      {
        cpf: '08741221014',
        nome: 'Lucas',
        idade: 41,
        genero: 'masculino',
        cargo: 'Serviços Gerais',
        estagiarios: []
      }
    ];
    expect(getEmployeeByName('Gabriel')).toEqual(result01);
    expect(getEmployeeByName('Lucas')).toEqual(result02);
  });

});
