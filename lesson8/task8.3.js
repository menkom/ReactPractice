// Реализовать функцию, которая принимает строку и возвращает массив в определенном формате.
// Строка всегда приходит в нижнем регистре.
// getWave('react');//  [‘React’, ‘rEact’, ‘reAct’, ‘reaCt’, ‘reacT’]
// Если нам попадается пустой символ (пробел), то мы его пропускаем.
// getWave('hello world'); // [‘Hello world, ‘hEllo world, ‘heLlo world, ‘helLo world, ‘hellO world’,
// ‘hello World’, ‘hello wOrld’, ‘hello worLd’, ‘hello worlD’]

String.prototype.replaceChar = function (newText, index) {
    return this.substring(0, index) + newText + this.substring(index + newText.length);
};

function getWave(phrase) {
    let result = [];

    let i = 0;
    while (i < phrase.length) {
        if (phrase[i] !== ' ') {
            result = [...result, phrase.replaceChar(phrase[i].toUpperCase(), i)]
        }
        i++;
    }
    return result;
}

console.log(getWave('react'));//  [‘React’, ‘rEact’, ‘reAct’, ‘reaCt’, ‘reacT’]
console.log(getWave('hello world'));