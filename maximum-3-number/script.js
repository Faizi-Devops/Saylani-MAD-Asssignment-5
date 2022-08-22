var a = prompt("Please enter the value");
var newa = Number(a);
var b = prompt("Please enter the value");
var newb = Number(b);
var c = prompt("Please enter the value");
var newc = Number(c);
if (newa > newb && newa > newc) {
    alert(newa + " is larger value");
}
else if (newb > newc && newb > newa) {
    alert(newb + " is larger value");
}
else {
    alert(newc + " is larger value");
}
