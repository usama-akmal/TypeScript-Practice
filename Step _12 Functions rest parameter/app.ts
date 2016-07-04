var concat = function (fname : string,...restNames : string[] ) :string {
    var finalName : string = fname;
    restNames.forEach(element => {
        finalName += " " + element;
    });
    return finalName;
}

console.log(concat("Usama","Akmal","Hussain","Yazdani"));
