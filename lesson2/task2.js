//Реализовать функцию, которая принимает список аргументов и возвращает
// true если содержится хотя бы один повторяющийся аргумент и false если все
// аргументы, переданные в функцию уникальны.
//
// duplicateArgs(1, 2, 3) // returns false
// duplicateArgs(35, 14, 40, 14) // returns true
// duplicateArgs('18', '2', '77', '2') // returns true
// duplicateArgs('abc', 'sso', 'js', 'true', 'else', 'js') // returns true

function duplicateArgs(...array) {
    console.log(array.filter((cur, index) =>
        array.filter((insideCur, insideIndex) => index !== insideIndex && cur === insideCur).length > 0).length > 0);
}

duplicateArgs(1, 2, 3); // returns false
duplicateArgs(35, 14, 40, 14); // returns true
duplicateArgs('18', '2', '77', '2'); // returns true
duplicateArgs('abc', 'sso', 'js', 'true', 'else', 'js'); // returns true
