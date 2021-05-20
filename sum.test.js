const sumTwoMinValuesInArray = require('./sumTwoMinValuesInArray');
const firstCaseArray = [1];
const secondCaseArray = [1,'i'];
const thirdCaseArray = [4, 0, 3, 19, 492, -10, 1];

test('sumTwoMinValuesInArray, array with not enough elements to perform, exception thrown', () => {
    expect(()=>{sumTwoMinValuesInArray(firstCaseArray)}).toThrow('Insufficient array length');
});
test('sumTwoMinValuesInArray, Invalid data type in the array, exception thrown', () => {
    expect(()=>{sumTwoMinValuesInArray(secondCaseArray)}).toThrow('Invalid data type in the array');
});
test('sumTwoMinValuesInArray, array with enough elements to perform, exception not thrown', () => {
    expect(()=>{sumTwoMinValuesInArray(thirdCaseArray)}).not.toThrow(Error);
});

