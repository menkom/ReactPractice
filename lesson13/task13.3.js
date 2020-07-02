// Функция принимает массив направлений, вернуть массив, содержащий самый короткий путь к конечной точке.
// "NORTH", "SOUTH", "WEST", "EAST". Если "NORTH" и "SOUTH" противоположны,
// а значит бессмысленно двигаться по этим направления, лучше оставаться на месте. "WEST" и "EAST" тоже.
// Например, crossDesert(["NORTH", "SOUTH", "EAST", "WEST"])
// "NORTH" + "SOUTH" 🡪 движение на север, а потом обратно на юг, бессмысленное движение, следовательно лучше оставаться на месте.
//     Остается ["EAST", "WEST"] 🡪 если мы будем так двигаться, то останемся на месте.
//     В результате мы должны вернуть пустой массив.
// crossDesert(["NORTH", "WEST", "SOUTH", "EAST"]) 🡪 ["NORTH", "WEST", "SOUTH", "EAST"]
// crossDesert([ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH' ]) 🡪 [ 'NORTH' ]
// crossDesert([ 'NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH' ]) 🡪
// ['NORTH', 'EAST']
// crossDesert([ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]) 🡪  ['NORTH', 'WEST', 'SOUTH', 'EAST']
// crossDesert([ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST' ]) 🡪 [ 'WEST' ]

function crossDesert(arrayOfDirections) {
    let working = [...arrayOfDirections];
    let i = 0
    while (i < working.length - 1) {
        if (checkOpposite(working[i], working[i + 1])) {
            working.splice(i, 2);
        } else {
            i++;
        }
    }
    return arrayOfDirections.length === working.length ? working : crossDesert(working);
}

function checkOpposite(one, two) {
    return (one === 'NORTH' && two === 'SOUTH')
        || (two === 'NORTH' && one === 'SOUTH')
        || (one === 'WEST' && two === 'EAST')
        || (two === 'WEST' && one === 'EAST');
}

console.log(crossDesert(["NORTH", "SOUTH", "EAST", "WEST"]));//[]
console.log(crossDesert(["NORTH", "WEST", "SOUTH", "EAST"]));//🡪 ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH']));//🡪 [ 'NORTH' ]
console.log(crossDesert(['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH']));// ['NORTH', 'EAST']
console.log(crossDesert(['NORTH', 'WEST', 'SOUTH', 'EAST']));//🡪  ['NORTH', 'WEST', 'SOUTH', 'EAST']
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));// 🡪 [ 'WEST' ]