const getEmployeeByCpf = require('../src/getEmployeeByCpf');

describe('4 - Implemente a função \'getEmployeeByCpf\' para retornar a pessoa colaboradora por CPF (estagiários inclusos).', () => {

  it('A função deve retornar undefined caso não receba um parâmetro ou receba um parâmetro inválido.', () => {
    expect(getEmployeeByCpf()).toBeUndefined();
    expect(getEmployeeByCpf(3)).toBeUndefined();
    expect(getEmployeeByCpf({})).toBeUndefined();
  });

  it('A função deve retornar os funcionários detentores dos CPFs informados em ordem alfabética.', () => {
    const result = [
      {
        cpf: '58471245235',
        nome: 'Joselita',
        idade: 29,
        genero: 'feminino',
        cargo: 'Vendedor(a)',
        estagiarios: [],
      },
      {
        cpf: '47812451784',
        nome: 'Maria',
        idade: 20,
        genero: 'feminino',
        cargo: 'Estagiário(a)',
      },

    ];
    expect(getEmployeeByCpf('47812451784', '58471245235')).toEqual(result);
  });

  it('A função deve retornar um array em branco caso não encontre o funcionário pesquisado.', () => {
    expect(getEmployeeByCpf('12345678901')).toEqual([]);
  });

});
