/*Напиши функцию, на вход которой приходит массив чисел.
Функция возвращает сумму двух минимальных элементов массива.
Например, если дан массив [4, 0, 3, 19, 492, -10, 1], то результатом будет -10,
потому что два минимальных числа -10 и 0, а их сумма -10.
Напиши минимум 3 модульных теста на эту функцию.
HINT: учти, что МАССИВ МОЖЕТ БЫТЬ ПУСТЫМ, или без цифр
или состоять из 100 МЛН. ЭЛЕМЕНТОВ, поэтому надо учесть разные граничные условия.*/

let numbs = [4, -10, 3, 19, 492, 0, 1];

function sum (arr = []) {

    if (arr.length < 2)
        throw new Error('The array is empty');

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
    console.log(a,b)
    return  a + b;
}
    console.log(sum(numbs));


