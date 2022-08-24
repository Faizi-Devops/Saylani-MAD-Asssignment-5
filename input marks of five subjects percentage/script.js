//physics
var a = prompt("Enter the Physics Total Marks");
var b = Number(a);
var c = prompt("Obtained Marks");
var d = Number(c);
var physics = d / b * 100;
alert("The percentage  of physics is " + physics + "%");
//chemistry
var e = prompt("Enter the Chemistry Total Marks");
var f = Number(e);
var g = prompt("Obtained Marks");
var h = Number(g);
var chemistry = h / f * 100;
alert("The percentage  of Chemistry is " + chemistry + "%");
//Biology
var i = prompt("Enter the Biology Total Marks");
var j = Number(i);
var k = prompt("Obtained Marks");
var l = Number(k);
var biology = l / j * 100;
alert("The percentage  of Biology is " + biology + "%");
//Mathematics
var m = prompt("Enter the Mathematics Total Marks");
var n = Number(m);
var o = prompt("Obtained Marks");
var p = Number(o);
var mathematics = p / n * 100;
alert("The percentage  of Mathematics is " + mathematics + "%");
//Computer
var q = prompt("Enter the Computer Total Marks");
var r = Number(q);
var s = prompt("Obtained Marks");
var t = Number(s);
var computer = t / r * 100;
alert("The percentage  of Computer is " + computer + "%");
var percentage = (physics + chemistry + biology + mathematics + computer) / 5;
alert(percentage);
if (percentage >= 90 && percentage <= 100) {
    alert("Grade A");
}
else if (percentage >= 80 && percentage <= 89) {
    alert("Grade B");
}
else if (percentage >= 70 && percentage <= 79) {
    alert("Grade C");
}
else if (percentage >= 60 && percentage <= 69) {
    alert("Grade D");
}
else if (percentage >= 40 && percentage <= 59) {
    alert("Grade E");
}
else {
    alert("Grade F");
}
