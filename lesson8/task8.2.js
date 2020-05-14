// Реализовать функцию, которая принимает строку или массив и
// возвращает массив удалив дублирующие элементы, идущие подряд.
// Порядок элементов не должен меняться.
//
// deleteDuplicate('AAAABBBCCDAABBB'); // ['A','B','C','D','A','B']
// deleteDuplicate([2,4,4,5,2,2,8]); // [2,4,5,2,8]

function deleteDuplicate(arg) {
    let arr = arg;
    if (arg instanceof String) {
        arr = arr.split('');
    }
    let result = [arr[0]];
    let i = 1;
    while (i < arr.length) {
        if (result[result.length - 1] !== arr[i]) {
            result = [...result, arr[i]];
        }
        i++;
    }
    return result;
}

console.log(deleteDuplicate('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B']
console.log(deleteDuplicate([2, 4, 4, 5, 2, 2, 8])); // [2,4,5,2,8]