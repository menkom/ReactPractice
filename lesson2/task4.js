// Функция принимает массив объектов и в результате своей работы должна
// вывести в консоль сообщение если пользователь подписан на
// рассылку(isSubscribed). Формат сообщения: name, ваш заказ принят,
//     подробности вашего заказа в письме, которое мы отправили на mail
// (name и mail это имя и почта соответствующего клиента).

const clients = [{
    name: 'Филип Фрай',
    email: 'fray@mail.un',
    isSubscribed: false,
    orders: [11700, 1980, 450, 5500]
}, {
    name: 'Мартин Скорсезе',
    email: 'bender.rodriges@rambler.un',
    isSubscribed: true,
    orders: [440, 226, 7650, 2990, 70]
}, {
    name: 'Доктор Джон Зоидберг',
    email: 'zoidberg-md@list.un',
    isSubscribed: true,
    orders: [720]
},
    {
        name: 'Альберт Кейн',
        email: 'kane.undead@rambler.un',
        isSubscribed: false,
        orders: [13, 256, 4650, 70]
    },
];

function isCustomerSubscribe(array) {
    array.filter(item => item.isSubscribed).forEach(item => console.log(`${item.name},` +
        `ваш заказ принят, подробности вашего заказа в письме, которое мы отправили на ${item.email}`));
}

isCustomerSubscribe(clients);