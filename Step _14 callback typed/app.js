var func = function (a, b) {
    if ((typeof (a) && typeof (b)) == "string") {
        return 1;
    }
    else {
        return 0;
    }
};
var fun1 = function (a, b, c) {
    console.log(c(a, b));
};
fun1("U", "A", func);
