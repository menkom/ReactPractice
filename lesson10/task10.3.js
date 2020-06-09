//Функция принимает строку чисел. Функция должна отсортировать элементы сроки по возрастанию суммы чисел.
// Если сумма чисел одинаковая, то элементы должны быть отсортированы в алфавитном порядке, как если бы они были не числами, а строками.
// Например, 88 равняется 16, а 101 равняется 2 тогда в результате 101 будет стоять перед 88.

// check('53133 145 162715 132 472273 97 181372 29 137714 40 456194 51 146067 84 93657 120 110688 55 239413 28 84') 🡪 '120 40 132 51 145 28 55 29 84 84 53133 97 162715 181372 239413 137714 110688 146067 472273 456194 93657'
// check('127447 82 422823 157 237150 74 392856 3 438729 192 421966 71 403108 89 178522 57 212092 142 47233 150 58') 🡪 '3 150 142 71 82 74 192 57 157 58 212092 403108 89 237150 47233 422823 127447 178522 421966 392856 438729'
// check('125566 20 94092 166 341403 17 401572 81 401052 154 375841 174 92924 122 196190 164 69018 64 135964 110 39') 🡪 '110 20 122 17 81 154 64 164 174 39 401052 166 341403 401572 69018 94092 125566 196190 92924 135964 375841'
// check('201002 167 166652 3 480560 131 101464 8 176255 189 160070 55 281192 99 387041 112 334378 122 426837 77 97') 🡪 '3 112 122 131 201002 8 55 160070 167 77 101464 97 189 99 281192 387041 480560 166652 176255 334378 426837'

const check = function (line) {
    const array2D = line.split(' ').map(item => [item, countString(item)]);
    array2D.sort(sortFunction);
    return array2D.map(item => item[0]).join(' ');
}

//Преобразование строки с числами в сумму этих чисел
const countString = (str) => (str.split('').reduce((accum, curr) => accum + Number(curr), 0));

//Функция для сортировки
const sortFunction = (a, b) => (a[1] < b[1] && -1) || (a[1] > b[1] && 1) || (a[0] < b[0] && -1) || (a[0] > b[0] && 1) || 0;

console.log(check('53133 145 162715 132 472273 97 181372 29 137714 40 456194 51 146067 84 93657 120 110688 55 239413 28 84') === '120 40 132 51 145 28 55 29 84 84 53133 97 162715 181372 239413 137714 110688 146067 472273 456194 93657'); // '120 40 132 51 145 28 55 29 84 84 53133 97 162715 181372 239413 137714 110688 146067 472273 456194 93657'
console.log(check('127447 82 422823 157 237150 74 392856 3 438729 192 421966 71 403108 89 178522 57 212092 142 47233 150 58') === '3 150 142 71 82 74 192 57 157 58 212092 403108 89 237150 47233 422823 127447 178522 421966 392856 438729'); // '3 150 142 71 82 74 192 57 157 58 212092 403108 89 237150 47233 422823 127447 178522 421966 392856 438729'
console.log(check('125566 20 94092 166 341403 17 401572 81 401052 154 375841 174 92924 122 196190 164 69018 64 135964 110 39') === '110 20 122 17 81 154 64 164 174 39 401052 166 341403 401572 69018 94092 125566 196190 92924 135964 375841'); // '110 20 122 17 81 154 64 164 174 39 401052 166 341403 401572 69018 94092 125566 196190 92924 135964 375841'
console.log(check('201002 167 166652 3 480560 131 101464 8 176255 189 160070 55 281192 99 387041 112 334378 122 426837 77 97') === '3 112 122 131 201002 8 55 160070 167 77 101464 97 189 99 281192 387041 480560 166652 176255 334378 426837'); // '3 112 122 131 201002 8 55 160070 167 77 101464 97 189 99 281192 387041 480560 166652 176255 334378 426837'