/**
 * Реализовать функцию, которая принимает id сообщения(posts).
 * С помощью этого id и https://jsonplaceholder.typicode.com/ вывести в консоль имя пользователя,
 * написавшего это сообщение. Предусмотреть обработку ошибок(вывод их в консоль).
 */

//Если просто из файла выполнять fetch, то это не будет работать.
// Решение
// 1. Выполнять fetch().then().then() в браузере
// 2. а) Сделать npm init.
// б) Выполнить npm install node-fetch --save
// в) И добавить в файл "const fetch = require('node-fetch');"

const fetch = require('node-fetch');

function getAuthor(authorId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${authorId}`)
        .then(response => response.json())
        .then(json => fetch(`https://jsonplaceholder.typicode.com/users/${json.userId}`))
        .then(response => response.json())
        .then(json => console.log(json.name));
}

getAuthor(35);