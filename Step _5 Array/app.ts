var array : number[] = [];


array.push(10);
array.push(25);
console.log(array);

console.log("\n");


var array1: Array<number> = [10,25,26];

array.forEach(element => {
    console.log("Array 1 : " + element);
});
console.log("\n");

array1.forEach(element =>{
console.log("Array 2 : "+ element);

});