function sum (arr = []) {

    if (arr.length < 2)
        throw new Error('Insufficient array length');

    let a = Number.MAX_SAFE_INTEGER;
    let b = Number.MAX_SAFE_INTEGER;

    for (let el of arr) {
        if (typeof el === 'number') {
            if (el < a) {
                b = a;
                a = el;
            } else if (el < b)
                b = el;
        }

    }
    return  a + b;
}
module.exports = sum;


