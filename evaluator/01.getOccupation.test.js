const getOccupation = require('../src/getOccupation');

const occupations = [
  'Gerente de Vendas',
  'Motorista',
  'Serviços Gerais',
  'Gerente de TI',
  'Gerente de Marketing',
  'Diretor(a) de Marketing',
  'Gerente de Estoque',
  'Vendedor(a)',
];

describe('1 - Implemente a função \'getOccupation\' que retorna os cargos existentes', () => {
  it('Retorna um array com as profissões existentes, sem repetição', () => {
    expect(getOccupation()).toEqual(occupations.sort());
  });

  it('O array deve estar organizado por ordem alfabética', () => {
    expect(getOccupation()).toEqual(occupations.sort());
  });
});
