const sum = require('./sum');
const firstArr = [1];
const secondArr = [1,'i'];
const thirdArr = [4, 0, 3, 19, 492, -10, 1];

test('sum, array with not enough elements to perform, exception thrown', () => {
    expect(()=>{sum(firstArr)}).toThrow('Insufficient array length');
});
test('sum, Invalid data type in the array, exception thrown', () => {
    expect(()=>{sum(secondArr)}).toThrow('Invalid data type in the array');
});
test('sum, array with enough elements to perform, exception not thrown', () => {
    expect(()=>{sum(thirdArr)}).not.toThrow(Error);
});

