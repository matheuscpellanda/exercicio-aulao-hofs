const getEmployeeByOccupation = require('../src/getEmployeeByOccupation');

const vendedores = [
  {
    cpf: '77714512345',
    nome: 'Matheus',
    idade: 25,
    genero: 'masculino',
    cargo: 'Vendedor(a)',
    estagiarios: [],
  },
  {
    cpf: '58471245235',
    nome: 'Joselita',
    idade: 29,
    genero: 'feminino',
    cargo: 'Vendedor(a)',
    estagiarios: [],
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

const servGerais = [
  {
    cpf: '41233697845',
    nome: 'Márcia',
    idade: 40,
    genero: 'feminino',
    cargo: 'Serviços Gerais',
    estagiarios: [],
  },
  {
    cpf: '08741221014',
    nome: 'Lucas',
    idade: 41,
    genero: 'masculino',
    cargo: 'Serviços Gerais',
    estagiarios: [],
  },
];

describe('2 - Implemente a função \'getEmployeeByOccupation\' que deve retornar os empregados que exercem determinada profissão', () => {

  it('A função deve conferir se a profissão passada existe e é válida. Caso não exista, deve retornar undefined', () => {
    expect(getEmployeeByOccupation('Qualquer profissão')).toBeUndefined();
  });

  it('Caso receba um parâmetro diferente de uma String, deve retornar undefined', () => {
    expect(getEmployeeByOccupation(1)).toBeUndefined();
    expect(getEmployeeByOccupation({obj: 'teste'})).toBeUndefined();
    expect(getEmployeeByOccupation([1, 2, 3])).toBeUndefined();
  });

  it('O array retornado deve estar organizado em ordem crescente de idade', () => {
    expect(getEmployeeByOccupation('Vendedor(a)')).toEqual(vendedores);
    expect(getEmployeeByOccupation('Serviços Gerais')).toEqual(servGerais);
  });

});
