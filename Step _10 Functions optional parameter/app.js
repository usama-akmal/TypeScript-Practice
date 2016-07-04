var func = function (a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
};
console.log(func(45) + "\n" + func(88, 88));
