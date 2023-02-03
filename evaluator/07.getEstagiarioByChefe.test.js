const getEstagiarioByChefe = require('../src/getEstagiarioByChefe');

const result01 = [
  {
    cpf: '02148754321',
    nome: 'Kleiton',
    idade: 18,
    genero: 'masculino',
    cargo: 'Estagiário(a)',
  },
  {
    cpf: '65465412378',
    nome: 'Marcos',
    idade: 17,
    genero: 'masculino',
    cargo: 'Estagiário(a)',
  },
  {
    cpf: '10231202149',
    nome: 'Maria',
    idade: 16,
    genero: 'feminino',
    cargo: 'Estagiário(a)',
  },
];

describe('7 - Implemente a função \'getEstagiarioByChefe\' que deverá retornar os estagiários conforme seus orientadores.', () => {

  it('A função deverá retornar \'undefined\' caso não receba um parâmetro ou receba um parâmetro inválido.', () => {
    expect(getEstagiarioByChefe()).toBeUndefined();
    expect(getEstagiarioByChefe('')).toBeUndefined();
    expect(getEstagiarioByChefe([])).toBeUndefined();
    expect(getEstagiarioByChefe({})).toBeUndefined();
  });

  it('A função deverá retornar \'undefined\' caso receba um funcionário não existente.', () => {
    expect(getEstagiarioByChefe('Qualquer string')).toBeUndefined();
  });

  it('A função deve retornar um array vazio caso não encontre nenhum resultado.', () => {
    expect(getEstagiarioByChefe('Lucas')).toEqual([]);
  });

  it('O array retornado deve estar em ordem alfabética (nomes dos estagiários).', () => {
    expect(getEstagiarioByChefe('Paula')).toEqual(result01);
  });

});
