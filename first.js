const prompt = require("prompt-sync")();


var a =parseInt( prompt("enter your first number: "));
    console.log(a);
var b =parseInt( prompt("enter your second number: "));

choice = prompt ("enter your choice for mathamatical operation: ");

if(choice==1) {
    result = a+b
}
if(choice==2) {
    result = a-b
}
if(choice==3) {
    result = a*b
}
if(choice==4) {
    result = a/b
}

else {
    console.log("enter your choice correctly");
}
console.log("result:",result);