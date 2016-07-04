const enum Class{
    Read,
    Write = 4,
    Check = 1
}
console.log(Class.Read);


var a : number = Class["Write"];
//var b : string = Class[2];

console.log(a+"");
