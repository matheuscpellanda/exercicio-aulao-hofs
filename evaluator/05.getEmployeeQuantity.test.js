const getEmployeeQuantity = require('../src/getEmployeeQuantity');

describe('5 - Implemente a função \'getEmployeeQuantity\' que deverá contabilizar o número de funcionários na empresa.', () => {

  it('A função deverá retornar o número de funcionários da empresa, incluindo os estagiários.', () => {
    expect(getEmployeeQuantity()).toBe(18);
  });

});
