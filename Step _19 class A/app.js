/**
 * Human
 */
var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.eat = function () {
        console.log(this.name + " is human and eating biryani!");
    };
    return Human;
}());
/**
 * Animal
 */
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is Animal and eating food!");
    };
    return Animal;
}());
var Robot = (function () {
    function Robot(title) {
        this.title = title;
    }
    return Robot;
}());
var WildAnimal = (function () {
    function WildAnimal(title) {
        this.title = title;
    }
    WildAnimal.prototype.eat = function () {
        console.log(this.title + " is a Wild Animal and is eating");
    };
    return WildAnimal;
}());
var h = new Human("Tom");
var a = new Animal("Goat");
var r = new Robot("R2-D2");
var r0 = new Animal("Donkey"); //how is this possible?
var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot); //false, giving the right results
var isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal); //true, giving the right results
var h2 = h;
h = a; //both have same properties and methods therefore are compatible
h.eat();
var a2 = a;
var r2 = r;
r = a; //Animal has a name, Robot also has a name
a = r2; //Error, Robot does not have eat method
var hum = new Animal("Dog");
var wild = new WildAnimal("Deer");
