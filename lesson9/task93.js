function forsage(speedA, speedB, gap) {
    if (speedA >= speedB) {
        throw new Error("speedA can't be greater or equal speedB.");
    }
    const hours = gap / (speedB - speedA);
    const minutes = (hours - Math.trunc(hours)) * 60;
    const sec = (minutes - Math.trunc(minutes)) * 60;
    return [Math.trunc(hours), Math.trunc(minutes), Math.trunc(sec)];
}

console.log(forsage(80, 100, 40));// [2, 0, 0]
console.log(forsage(547, 651, 123));// [ 1, 10, 57 ]
console.log(forsage(710, 792, 70));// [ 0, 51, 13 ]
console.log(forsage(405, 507, 66));// [ 0, 38, 49 ]
console.log(forsage(264, 314, 126));// [ 2, 31, 12 ]