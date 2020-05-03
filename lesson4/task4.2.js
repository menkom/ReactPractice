// Реализовать метод zip у массивов. Данный метод соединяет два массива с помощью специальной функции.
// Первый аргумент, который принимает метод zip является массив, с которым будет соединяться массив,
// у которого вызывается метод zip. Вторым, функция которая будет соединять элементы массивов.
// Если длинна массива, который передается в метод zip больше, чем длинна массива, у которого вызывается данный метод,
// то мы должны прекратить слияние массивов на последнем элементе массива, у которого вызвался метод zip.
//
//     Array.prototype.zip = function (arr, fn) {
//     // code me
// }
//
// const a = [1, 2, 3, 4, 5];
// const b = ['a','b','c','d','e'];
//
// a.zip(b, (a, b) => a + b);  // ["1a", "2b", "3c", "4d", "5e"]
// b.zip(a, (a, b) => a + b);  // ["a1", "b2", "c3", "d4", "e5"]
// b.zip(a.zip(b,(a,b) => a*b.charCodeAt(0)), (a, b) => a + b);  // ["a97", "b196", "c297", "d400", "e505"]

Array.prototype.zip = function (arr, fn) {
    if (this.length < arr.length) {
        return "Array length more then length of original array.";
    }
    return this.map((item, index) => fn(item, arr[index]))
};

const a = [1, 2, 3, 4, 5];
const b = ['a', 'b', 'c', 'd', 'e'];

console.log(a.zip(b, (a, b) => a + b));  // ["1a", "2b", "3c", "4d", "5e"]
console.log(b.zip(a, (a, b) => a + b));  // ["a1", "b2", "c3", "d4", "e5"]
console.log(b.zip(a.zip(b, (a, b) => a * b.charCodeAt(0)), (a, b) => a + b));  // ["a97", "b196", "c297", "d400", "e505"]