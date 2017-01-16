var testString = "mdtest.file";
var date = new Date();
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var day = ("0" + date.getDate()).slice(-2);

let customDate = date.getFullYear() + "-" + month + "-" + day
                + " " + date.getHours() + ":" + date.getMinutes(); 

console.log(customDate);