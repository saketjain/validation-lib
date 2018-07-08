import validations from '../src/index.js';
var assert = require('assert');

describe('Validation Test ', () => {
  it('ValidateCounterparty', async () => {
    console.log(validations);
    const result = await validations.get('ValidateCounterparty')('cp1');
    assert.equal(true, result);
  })
});

describe('Trade Validation Test ', () => {
  it('ValidateTrader', async () => {
    console.log(validations);
    const result = await validations.get('ValidateTrader')('f1', 'l1');
    assert.equal(true, result);
  })
});
