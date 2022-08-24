var a = prompt("Please enter the first angle value");
var b = Number(a);
var c = prompt("Please enter the second angle value");
var d = Number(c);
var e = prompt("Please enter the third angle value");
var f = Number(e);
var total = b + d + f;
if (total == 180) {
    alert("The traingle is valid");
}
else {
    alert("The traingle is not valid");
}
