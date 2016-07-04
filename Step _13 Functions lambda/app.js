var lambda = function (a, b) { return (a + b); };
var lambda2 = function (a, b) {
    if (typeof (a) == "string" && typeof (b) == "string")
        console.log("string");
    else
        console.log("null");
};
console.log(lambda("Usama ", "Akmal"));
lambda2("Usama", 2);
lambda2("Usama", "");
