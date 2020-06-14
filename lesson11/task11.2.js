//Функция принимает строку результатов забега в формате
// '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41' (ч|м|с).
// Вернуть строку в формате  'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00'
// Range считается как время самого большого значения минус самое маленькое значение
// Average считается как сумма всех результатов разделенная на количество результатов
// Median считается как если бы наши результаты были отсортированы по возрастанию.
// Если количество результатов четное, то берем сумму двух серединных результатов и делим на 2,
// если количество результатов не четно, то берем средний результат.
// Например: [1,3,4,5,6] в данном случае median равен 4. Если [1,3,3,5,6,7] в данном случае (3 + 5) / 2 = 4, median равен 4.
// Если пришла пустая строка, то вернуть пустую строку. Используйте округление в большую сторону.

// getStatistic('12|17|20, 10|16|16, 1|22|00, 2|32|34, 10|26|37, 13|19|34, 2|32|34, 12|17|20, 02|17|20') 🡪 Range: 11|57|34 Average: 07|29|03 Median: 10|16|16
// getStatistic('1|32|34, 2|22|00, 2|17|17, 1|17|48, 02|17|20, 1|47|16, 00|22|34, 00|22|34, 1|47|16, 9|22|34, 2|17|17, 2|22|00, 00|17|20, 00|22|34, 10|26|37, 1|47|16, 11|22|00') 🡪 Range: 11|04|40 Average: 03|04|57 Median: 01|47|16
// getStatistic('9|22|34, 2|17|17, 12|17|48, 1|15|59, 10|16|16') 🡪 Range: 11|01|49 Average: 07|05|58 Median: 09|22|34
// getStatistic('00|19|34, 02|17|20, 2|47|16') 🡪 Range: 02|27|42 Average: 01|48|03 Median: 02|17|20

function getStatistic(str) {
    if (!str || str.trim() === '') {
        return '';
    }
    const times = str.split(', ').sort(sortFunction);

    const range = 'Range:' + convertToTime(convertToSeconds(times[times.length - 1]) - convertToSeconds(times[0]));
    const average = 'Average:' + convertToTime(
        (times.map(convertToSeconds).reduce((accum, curr) => accum + curr, 0) / times.length) ^ 0
    );
    const median = 'Median:' + (times.length % 2 === 1
        ? times[(times.length / 2 ^ 0)]
        : convertToTime(convertToSeconds(times[times.length / 2]) - convertToSeconds(times[times.length / 2 - 1])));

    return range + ' ' + average + ' ' + median;
}

const convertToSeconds = (str) => {
    return str.split('|')
        .map((value, index) => value * Math.pow(60, 3 - index - 1))
        .reduce((accum, curr) => accum + curr, 0);
}

const convertToTime = function (timeInSec) {
    const h = timeInSec / 3600 ^ 0;
    const m = timeInSec % 3600 / 60 ^ 0;
    const s = timeInSec - h * 3600 - m * 60;
    return h.toString().padStart(2, '0') + '|' + m.toString().padStart(2, '0') + '|' + s.toString().padStart(2, '0');
}

const sortFunction = (a, b) => {
    const aInSec = convertToSeconds(a);
    const bInSec = convertToSeconds(b);
    return aInSec - bInSec;
}

console.log(getStatistic());// 🡪 Range: 11|57|34 Average: 07|29|03 Median: 10|16|16
console.log(getStatistic('02|17|20, 2|47|16'));// 🡪 Range: 02|27|42 Average: 01|48|03 Median: 02|17|20
console.log(getStatistic('12|17|20, 10|16|16, 1|22|00, 2|32|34, 10|26|37, 13|19|34, 2|32|34, 12|17|20, 02|17|20'));// 🡪 Range: 11|57|34 Average: 07|29|03 Median: 10|16|16
console.log(getStatistic('1|32|34, 2|22|00, 2|17|17, 1|17|48, 02|17|20, 1|47|16, 00|22|34, 00|22|34, 1|47|16, 9|22|34, 2|17|17, 2|22|00, 00|17|20, 00|22|34, 10|26|37, 1|47|16, 11|22|00'));//🡪 Range: 11|04|40 Average: 03|04|57 Median: 01|47|16
console.log(getStatistic('9|22|34, 2|17|17, 12|17|48, 1|15|59, 10|16|16'));//🡪 Range: 11|01|49 Average: 07|05|58 Median: 09|22|34
console.log(getStatistic('00|19|34, 02|17|20, 2|47|16'));//🡪 Range: 02|27|42 Average: 01|48|03 Median: 02|17|20
