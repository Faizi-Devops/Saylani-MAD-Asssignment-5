var a = prompt("Please enter the first angle");
var b = Number(a);
var c = prompt("Please enter the second angle");
var d = Number(c);
var e = prompt("Please enter the second angle");
var f = Number(e);
if (b == d && d == f) {
    alert("The Traingle is Equiletral");
}
else if (b == d || d == f || f == b) {
    alert("The Triangle is Icosceles");
}
else {
    alert("The Traingle is Scalene");
}
