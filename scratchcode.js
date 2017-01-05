var testString = "mdtest.file";

console.log(testString.indexOf("."));
console.log(testString.substring(testString.indexOf("."), testString.length));

var list = [1,2,3,4,5,6,7,10,11];

for (var i in list){
    console.log(list[i] + 1);
    //console.log(i + 1);
}