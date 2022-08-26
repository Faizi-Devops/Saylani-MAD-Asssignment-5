var a = prompt("Please enter the Basic Salary of Employee");
var b = Number(a);
var HRA;
var DA;
if (b <= 10000) {
    HRA = (b / 100) * 20;
    DA = (b / 100) * 80;
    alert("The HRA is " + HRA + " and DA is " + DA);
}
else if (b <= 20000) {
    HRA = (b / 100) * 25;
    DA = (b / 100) * 90;
    alert("The HRA is " + HRA + " and DA is " + DA);
}
else {
    HRA = (b / 100) * 30;
    DA = (b / 100) * 95;
    alert("The HRA is " + HRA + " and DA is " + DA);
}
