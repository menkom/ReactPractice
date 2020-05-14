// Функция принимает строку и возвращает массив.
//     Символы:
// i – увеличивает значение на 1 (изначально равно 0)
// d – уменьшает значение на 1
// s – возводит значение в квадрат
// o – добавляет текущее значение в результирующий массив
// Все остальные символы должны игнорироваться.
// parse("iiisxxxdoso");//[ 8, 64 ]

function parse(arg) {
    let value = 0;
    let result = [];
    arg.split('').forEach((oper) => {
            if (oper === 'o') {
                result = [...result, value];
            } else {
                value = func(oper, value);
            }
        }
    );
    return result;
}

function func(operation, value) {
    switch (operation) {
        case 'i':
            return value + 1;
        case 'd':
            return value - 1;
        case 's':
            return Math.pow(value, 2);
        default:
            return value;
    }
}

console.log(parse('iiisxxxdoso'));//[ 8, 64 ]