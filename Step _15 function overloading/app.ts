function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: boolean, arg2: boolean): boolean;//option 3
function add(arg1: any, arg2: any): any {//this is not part of the overload list, so it has only three overloads
    return arg1 + arg2;
}
console.log(add("Usama","Akmal") ,add(1,5));
