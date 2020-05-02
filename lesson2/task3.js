// Функция принимает массив объектов, индекс элемента в массиве, и имя.
//     Функция должна вернуть тот же массив с измененным объектом (изменить
// имя в объекте).
// const clients = [{
//     name: 'Филип Фрай',
// email: 'fray@mail.un',
// isSubscribed: false,
//     orders: [ 11700, 1980, 450, 5500 ]
// }, {
//     name: 'Бендер Сгибатель Родригес',
//     email: 'bender.rodriges@rambler.un',
//     isSubscribed: true,
//         orders: [ 440, 226, 7650, 2990, 70 ]
// }, {
//     name: 'Доктор Джон Зоидберг',
//     email: 'zoidberg-md@list.un',
//
//     isSubscribed: true,
//         orders: [ 720 ]
// }];
//
// chageName(clients, 1, 'Мартин Скорсезе');
//
// const clients = [{
//     name: 'Филип Фрай',
// email: 'fray@mail.un',
// isSubscribed: false,
//     orders: [ 11700, 1980, 450, 5500 ]
// }, {
//     name: 'Мартин Скорсезе',
//     email: 'bender.rodriges@rambler.un',
//     isSubscribed: true,
//         orders: [ 440, 226, 7650, 2990, 70 ]
// }, {
//     name: 'Доктор Джон Зоидберг',
//     email: 'zoidberg-md@list.un',
//     isSubscribed: true,
//         orders: [ 720 ]
// },
// {
//     name: 'Альберт Кейн,
//     email: kane.undead@rambler.un',
//     isSubscribed: false,
//         orders: [ 13, 256, 4650, 70 ]
// },
// ];

const clients = [{
    name: 'Филип Фрай',
    email: 'fray@mail.un',
    isSubscribed: false,
    orders: [11700, 1980, 450, 5500]
}, {
    name: 'Бендер Сгибатель Родригес',
    email: 'bender.rodriges@rambler.un',
    isSubscribed: true,
    orders: [440, 226, 7650, 2990, 70]
}, {
    name: 'Доктор Джон Зоидберг',
    email: 'zoidberg-md@list.un',

    isSubscribed: true,
    orders: [720]
}];

function changeName(clientsArray, index, newName) {
    return clientsArray.map((item, i) => i === index ? Object.assign({}, item, {name: newName}) : item);
}

const changeNameDeclaration = function (arrOfClients, numberOfClient, newName) {
    return arrOfClients.map((item, index) => index === numberOfClient ? {...item, name: newName} : item);
};

console.log(changeName(clients, 1, 'Мартин Скорсезе'));
console.log(changeNameDeclaration(clients, 1, 'Мартин Скорсезе'));
console.log(clients);