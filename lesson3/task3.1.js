// Реализовать самостоятельно Object.create.
// Функция должна вернуть новый объект. Функция принимает первым аргументом объект, который будет являться
// прототипом создаваемого объекта и вторым свойства нового объекта(опционально).
// Сгенерировать исключение (throws  TypeError), если:
// prototype не является объектом или null
// если мы вызываем Object.create без параметров
// Если properties, то они должны добавляться в создаваемый объект с помошью Object.defineProperties()

// Object.create = function(prototype, properties) {
//     //Your code goes here
// };
//
// const citizen = {
//     sleep: function(){ return "zzZ..."; },
//     panic: function(){ return "AaAaAaAa!"; }
// };
//
// const veteran = Object.create(citizen, {panic: {
//         value: function(){
//             return "SNAFU";
//         }
//     }});
//
// console.log(veteran !== citizen); // true
// console.log(veteran instanceof citizen.constructor); // true
// console.log(veteran.sleep()); // zzZ...
// console.log(veteran.panic()); //SNAFU

Object.prototype.create = function (prototype, properties) {
    if (arguments.length < 2
        || prototype || !(prototype instanceof Object)) {
        throw new TypeError("Function arguments are not defined.");
    }

    const result = {...prototype};
    // alternative way
    // const result = {};
    // Object.setPrototypeOf(result, prototype);

    Object.defineProperties(result, properties);
    return result;
};

const citizen = {
    sleep: function () {
        return "zzZ...";
    },
    panic: function () {
        return "AaAaAaAa!";
    }
};

const veteran = Object.create(citizen, {
    panic: {
        value: function () {
            return "SNAFU";
        }
    }
});

console.log(veteran !== citizen); // true
console.log(veteran instanceof citizen.constructor); // true
console.log(veteran.sleep()); // zzZ...
console.log(veteran.panic()); //SNAFU