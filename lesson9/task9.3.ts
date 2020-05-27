// Две черепахи начали гонку. У черепахи A скорость 80 шагов в час.
// Черепаха B быстрее черепахи A и ее скорость 100 шагов в час.
// Черепаха B дает фору черепахе A. Когда черепаха B начинает гонку, она видит, что черепаха A впереди на 40 шагов.
// Сколько времени понадобится черепахи B чтобы догнать черепаху A.

// Функция принимает три аргумента, первый -  скорость черепахи A, второй -скорость черепахи B и третий –
// расстояние между A и B, когда B начинает движение.
//
// Функция должна вернуть массив [h, m, s]. h – часы, m – минуты, s – секунды.
//
// Если скорость черепахи A больше скорости B, то вернуть null. Округления производить в большую сторону.

// forsage(80, 100, 40)  🡪 [2, 0, 0]
// forsage(547, 651, 123) 🡪 [ 1, 10, 57 ]
// forsage(710, 792, 70) 🡪 [ 0, 51, 13 ]
// forsage(405, 507, 66) 🡪 [ 0, 38, 49 ]
// forsage(264, 314, 126) 🡪 [ 2, 31, 12 ]

function trunc(value: number): number {
    return value - value % 1;
}

function forsage(speedA: number, speedB: number, gap: number): [number, number, number] {
    if (speedA >= speedB) {
        throw new Error("speedA can't be greater or equal speedB.");
    }
    const hours = gap / (speedB - speedA);
    const minutes = (hours % 1) * 60;
    const secs = (minutes % 1) * 60;
    return [trunc(hours), trunc(minutes), trunc(secs)];
}

console.log(forsage(80, 100, 40));// [2, 0, 0]
console.log(forsage(547, 651, 123));// [ 1, 10, 57 ]
console.log(forsage(710, 792, 70));// [ 0, 51, 13 ]
console.log(forsage(405, 507, 66));// [ 0, 38, 49 ]
console.log(forsage(264, 314, 126));// [ 2, 31, 12 ]