var func : (a,b) => number = function (a: string,b: string) : number {
    if((typeof(a) && typeof(b)) == "string") {
        return 1;
    }
    else{
        return 0;
    }
}
var fun1 = (a: string,b : string,c : (a,b) => number) => {
    console.log(c(a,b));
    
}
fun1("U","A",func)