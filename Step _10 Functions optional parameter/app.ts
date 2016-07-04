var func : (a: number,b?:number) => number = function(a: number,b?:number):number{
    if(b){
        return a+b;
    }else{
        return a;
    }
}

console.log(func(45) + "\n" + func(88,88));
