var concat = function (fname) {
    var restNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restNames[_i - 1] = arguments[_i];
    }
    var finalName = fname;
    restNames.forEach(function (element) {
        finalName += " " + element;
    });
    return finalName;
};
console.log(concat("Usama", "Akmal", "Hussain", "Yazdani"));
