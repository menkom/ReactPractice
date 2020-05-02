// Реализовать метод массивов map(переписать метод map у объекта Array).
// [1,2,3].map(x => x ** 2);  //[1,4,9]
// [1,2,3].map(x => 2 * x);  // [2,4,6]
// [1,2,3].map(x => 2 ** x);  // [2,4,8]
// [1,2,3].map(x => x.toString());  // ["1","2","3"])
// ["1","2","3"].map(x => parseInt(x));  //[1,2,3])

Array.prototype.map = function (methodToApply) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(methodToApply(this[i]));
    }

    // alternative way
    // this.forEach(item=>result.push(methodToApply(item)));
    return result
};

console.log([1, 2, 3].map(x => x ** 2));  //[1,4,9]
console.log([1, 2, 3].map(x => 2 * x));  // [2,4,6]
console.log([1, 2, 3].map(x => 2 ** x));  // [2,4,8]
console.log([1, 2, 3].map(x => x.toString()));  // ["1","2","3"])
console.log(["1", "2", "3"].map(x => parseInt(x)));  //[1,2,3])