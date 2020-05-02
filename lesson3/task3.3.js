// Реализовать функцию конструктор, которая принимает имя персонажа и возвращает объект
// с двумя полями(имя, и количество хитпоинтов(100 у всех)).
// Также у всех объектов должен быть метод strike, который принимает объект(персонаж)
// по которому наносится удар и количество единиц урона, наносимых персонажу.
//
// var orc = new Warrior('Ork');
// var man = new Warrior('man');
//
// man.strike(ork, 3);  // ork.health should == 70
//
// Число, которое передается вторым аргументом умножается на 10.
// Отрицательными хитпоинты не могут быть.

const Warrior = function (name) {
    this.name = name;
    this.health = 100;
};

Warrior.prototype.strike = function (obj, strikeStrength) {
    obj.health = obj.health - strikeStrength * 10;
    if (obj.health < 0) {
        obj.health = 0;
    }
};

var orc = new Warrior('Orc');
var man = new Warrior('man');

man.strike(orc, 3);  // orc.health should == 70

console.log(man);
console.log(orc);