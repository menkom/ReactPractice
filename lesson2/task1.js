//Дан двумерный массив чисел, написать функцию, которая в результате своей
// работы вернет массив, отсортированный по убыванию.
//
// Дано [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], ваша функция должна вернуть [9, 8, 7, 6, 5,
// 4, 3, 2, 1].

const arraySrc = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

function flatFunctionDeclaration(array) {
    return array.reduce((accum, current) => accum.concat(...current), [])
        .sort()
        .reverse();
}

const flatFunctionExpression = function (array) {
    return array.reduce((accum, current) => accum.concat(...current), [])
        .sort()
        .reverse();
};

const arrowFunction = (array) => array.reduce((accum, current) => accum.concat(...current), []).sort().reverse();

console.log('Result:', flatFunctionDeclaration(arraySrc));
console.log('Result:', flatFunctionExpression(arraySrc));
console.log('Result:', arrowFunction(arraySrc));