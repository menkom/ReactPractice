// Функция принимает строку, возвращает преобразованную строку. Функция разбивает строку на две строки.
// В первую строку ложиться первая буква, вторая буква ложиться во вторую строку,
// третья буква ложиться в первую строку и так далее до конца строки. Например, функция принимает ‘Simple text’
// strOne = S|m|l| |e|t
// strTwo = i|p|e|t|x|
//     Функция должна вернуть "Sml etipetx"
// encrypt("All that glitters is not gold") 🡪 "Alta ltesi o odl htgitr sntgl"
// encrypt("The better part of valor is discretion") 🡪 "Tebte ato ao sdsrtoh etrpr fvlri icein"
// encrypt("Conscience does make cowards of us all") 🡪 "Cncec osmk oad fu losinede aecwrso sal"

function encrypt(text) {
    const arrayOfLetters = text.split('');
    let strOne = '';
    let strTwo = '';
    for (let i = 0; i < arrayOfLetters.length; i++) {
        if (i % 2 === 0) {
            strOne += arrayOfLetters[i];
        } else {
            strTwo += arrayOfLetters[i];
        }
    }

    return strOne + strTwo;
}

console.log(encrypt('Simple text'));//Sml etipetx
console.log(encrypt("All that glitters is not gold"));// 🡪 "Alta ltesi o odl htgitr sntgl"
console.log(encrypt("The better part of valor is discretion"));// 🡪 "Tebte ato ao sdsrtoh etrpr fvlri icein"
console.log(encrypt("Conscience does make cowards of us all"));// 🡪 "Cncec osmk oad fu losinede aecwrso sal"
