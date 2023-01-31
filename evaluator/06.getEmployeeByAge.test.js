const getEstagiarioByAge = require('../src/getEstagiarioByAge');

const result = [
  {
    cpf: '02148754321',
    nome: 'Kleiton',
    idade: 18,
    genero: 'masculino',
    cargo: 'Estagiário(a)',
  },
];

const result2 = [
  {
    cpf: '32566541278',
    nome: 'Geovane',
    idade: 17,
    genero: 'masculino',
    cargo: 'Estagiário(a)'
  },
  {
    cpf: '65465412378',
    nome: 'Marcos',
    idade: 17,
    genero: 'masculino',
    cargo: 'Estagiário(a)'
  }
];

describe('6 - Implemente a função \'getEstagiarioByAge\' que deverá retornar os estagiários que possuem determinada idade.', () => {

  it('A função deverá retornar \'undefined\' caso não receba um parâmetro ou receba um parâmetro inválido.', () => {
    expect(getEstagiarioByAge()).toBeUndefined();
    expect(getEstagiarioByAge('')).toBeUndefined();
    expect(getEstagiarioByAge('Qualquer string')).toBeUndefined();
    expect(getEstagiarioByAge([])).toBeUndefined();
    expect(getEstagiarioByAge({})).toBeUndefined();
  });

  it('A função deve retornar um array vazio caso não encontre nenhum resultado.', () => {
    expect(getEstagiarioByAge(15)).toEqual([]);
  });

  it('A função deve retornar o resultado.', () => {
    expect(getEstagiarioByAge(18)).toEqual(result);
    expect(getEstagiarioByAge(17)).toEqual(result2);
  });

});
