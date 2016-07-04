/**
 * Human
 */
class Human {
    name : string;
    constructor(name : string) {
        this.name = name;
    }
    eat(){
        console.log(this.name + " is human and eating biryani!");
        
    }
}

/**
 * Animal
 */
class Animal {
    name:string;
    constructor(name : string) {
        this.name = name;
    }
    eat(){
        console.log(this.name + " is Animal and eating food!");
        
    }
}

class Robot{
    title: string;
    constructor(title:string){
        this.title = title;
    }

}

class WildAnimal {
    title: string;
    
    constructor(title: string){
        this.title = title;
    }
    
    eat(){
        console.log(this.title + " is a Wild Animal and is eating");
    }
}


let h: Human = new Human("Tom");
let a: Animal = new Animal("Goat");
let r: Robot = new Robot("R2-D2");
let r0: Robot = new Animal("Donkey");//how is this possible?

var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot);//false, giving the right results

var isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal);//true, giving the right results



let h2 = h;
h = a;//both have same properties and methods therefore are compatible
h.eat();
let a2 = a;

let r2 = r;
r = a;//Animal has a name, Robot also has a name
a = r2;//Error, Robot does not have eat method
let hum : Human = new Animal("Dog");
let wild : Animal = new WildAnimal("Deer");