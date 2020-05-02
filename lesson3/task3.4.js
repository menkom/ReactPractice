// Создать класс Словарь
//
// class Dictionary {
//     constructor() {}
//     newEntry(key, value) {  }
//     look(key) {}
// }
//
// Если мы не находим нужное нам слово по ключу, то мы должны вернуть строку формата: Can't find entry for key

class Dictionary {

    entries;

    constructor() {
        this.entries = new Map();
    }

    newEntry(key, value) {
        this.entries.set(key, value);
    }

    look(key) {
        if (this.entries.has(key)) {
            return this.entries.get(key);
        } else {
            return `Can't find entry for ${key}`;
        }
    }
}

const dic = new Dictionary();
dic.newEntry("key", "ключ");
dic.newEntry("dictionary", "словарь");
dic.newEntry("class", "класс");

console.log(dic.look("qwe"));
console.log(dic.look("key"));