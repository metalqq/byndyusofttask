const sum = require('./sum');
const firstArr = [1];
const secondArr = [-1,0,1];

test('sum, array with not enough elements to perform, exception thrown', () => {
    expect(()=>{sum(firstArr)}).toThrow('Insufficient array length');
});

test('sum, array with enough elements to perform, exception not thrown', () => {
    expect(()=>{sum(secondArr)}).not.toThrow(Error);
});