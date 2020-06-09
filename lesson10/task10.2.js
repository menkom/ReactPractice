// Функция принимает двумерный массив чисел. Вернуть двумерный массив, в котором будут удалены элементы, которые повторяются чаще всего.
// check([ [ 3, 4, 5 ] ]) 🡪 [[]]
// check([ [ 3, 4, 5 ], [ 3, 4, 5 ] ]) 🡪 [[], []]
// check([ [ 5, 6, 8, 4, 7, 7, 1, 7, 7, 7, 8 ], [ 7, 8, 1, 8, 3, 7, 4, 2, 8, 3, 4 ], [ 8, 0, 1, 6, 9, 3, 2, 6, 2, 1, 7 ] ]) 🡪 [[5, 6, 8, 4, 1, 8], [8, 1, 8, 3, 4, 2, 8, 3, 4], [8, 0, 1, 6, 9, 3, 2, 6, 2, 1]]
// check([ [] ]) 🡪 [[]]
// check([]) 🡪 []
// check([ [ 8, 1, 6, 7, 4, 1, 8, 7 ], [ 0, 0, 0, 7, 2, 3, 2, 3, 8, 2, 5 ], [ 0, 3, 9, 7, 8, 9, 8, 9, 2, 9, 4, 8 ] ]) 🡪 [[1, 6, 7, 4, 1, 7], [0, 0, 0, 7, 2, 3, 2, 3, 2, 5], [0, 3, 9, 7, 9, 9, 2, 9, 4]]

function check(array2D) {
    const array1D = convertTo1D(array2D);

    const counted = countElement(array1D);

    //Максимальное значение среди значений массива
    const max = Math.max(...counted.values());

    //Map в виде массива [k,v]
    const entries = Array.from(counted.entries());

    const maxEntries = entries.filter(item => item[1] === max).map(value => value[0]);

    return array2D.map(array => array.filter(element => maxEntries.indexOf(element) === -1));
}

//Преобразовываем двумерный массив в одномерный
const convertTo1D = (array2D) => array2D.reduce((accumulator, current) => [...accumulator, ...current], []);

//Создаём Map с подсчитанными элементами
const countElement = (array1D) => {
    const mapElements = new Map();

    array1D.forEach(
        item => {
            if (mapElements.has(item)) {
                mapElements.set(item, mapElements.get(item) + 1);
            } else {
                mapElements.set(item, 1);
            }
        }
    );
    return mapElements;
};

console.log(check([[3, 4, 5]])); // [[]]
console.log(check([[3, 4, 5], [3, 4, 5]]));// ); // [[], []]
console.log(check([[5, 6, 8, 4, 7, 7, 1, 7, 7, 7, 8], [7, 8, 1, 8, 3, 7, 4, 2, 8, 3, 4], [8, 0, 1, 6, 9, 3, 2, 6, 2, 1, 7]])); // [[5, 6, 8, 4, 1, 8], [8, 1, 8, 3, 4, 2, 8, 3, 4], [8, 0, 1, 6, 9, 3, 2, 6, 2, 1]]
console.log(check([[]])); // [[]]
console.log(check([])); // []
console.log(check([[8, 1, 6, 7, 4, 1, 8, 7], [0, 0, 0, 7, 2, 3, 2, 3, 8, 2, 5], [0, 3, 9, 7, 8, 9, 8, 9, 2, 9, 4, 8]])); // [[1, 6, 7, 4, 1, 7], [0, 0, 0, 7, 2, 3, 2, 3, 2, 5], [0, 3, 9, 7, 9, 9, 2, 9, 4]]
