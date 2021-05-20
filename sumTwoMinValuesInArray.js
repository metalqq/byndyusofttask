function sumTwoMinValuesInArray (array = []) {

    if (array.length < 2)
        throw new Error('Insufficient array length');

    let firstMinValue = Number.MAX_SAFE_INTEGER;
    let secondMinValue = Number.MAX_SAFE_INTEGER;

    for (let el of array) {
        if (typeof el === 'number') {
            if (el < firstMinValue) {
                secondMinValue = firstMinValue;
                firstMinValue = el;
            } else if (el < secondMinValue)
                secondMinValue = el;
        }
        else
            throw new Error('Invalid data type in the array');
    }
    return  firstMinValue + secondMinValue;
}
module.exports = sumTwoMinValuesInArray;

