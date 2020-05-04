/*
class TopRated{

    constructor(){ }

    get list(){ }

    add( player ){ }
}

Реализовать класс TopRated. Данный класс принимает первым аргументом число (всегда приходит число),
которое задает размер зала (по умолчанию 5). Второй аргумент массив игроков.
Элемент массива имеет следующий формат [name, score], где name – это имя игрока(строка),
score – счет игрока(число). Метод list возвращает массив игроков в формате “Name: score”.
Данный массив отсортирован по убыванию (сортировать по значению счет(score)) и в алфавитном порядке,
если счет у двух игроков одинаковый.
    Если, например, размер массива 3, а игроков в массиве добавлено всего 2,
    то 3-им элементом массива должна быть пустая строка ( ‘’ ).
[‘Alya: 325’, ‘Boris: 253’, ‘’].
Метод add должен добавить игрока в массив, если его счет достаточно высок и есть место в массиве
(количество мест задается через значение size). И вернуть сам объект.
    const top = new HallOfFame();  // размер 5 по умолчанию
top.add(["A",4]).add(["E",3]).add(["I",1])
top.list --> ["A: 4","E: 3","I: 1","",""] //  <-- 2 "пустых игрока" в конце списка
top.add(["S",5]).add(["T",7])
top.list --> ["T: 7","S: 5","A: 4","E: 3","I: 1"]
*/

class TopRated {

    constructor(hallSize = 5) {
        this.hall = [];
        this.hallSize = hallSize;
    }

    get list() {
        let result = this.hall.map(value => value.name + ": " + value.score);
        if (this.hall.length < this.hallSize) {
            for (let i = this.hall.length; i < this.hallSize; i++) {
                result = result.concat("");
            }
        }
        return result;
    }

    add(player) {
        this.hall = this.hall.concat({name: player[0], score: player[1]}).sort((a, b) => this.comparator(a, b));
        if (this.hall.length > this.hallSize) {
            this.hall.pop();
        }
        return this;
    }

    comparator(a, b) {
        if (a.score < b.score) {
            return 1;
        } else if (a.score > b.score) {
            return -1;
        } else {
            return a.name - b.name;
        }
    }
}

const top = new TopRated();  // размер 5 по умолчанию

top.add(["A", 4]).add(["E", 3]).add(["I", 1]);
console.log(top.list);//["A: 4","E: 3","I: 1","",""]
top.add(["S", 5]).add(["T", 7]);
console.log(top.list);//["T: 7","S: 5","A: 4","E: 3","I: 1"]