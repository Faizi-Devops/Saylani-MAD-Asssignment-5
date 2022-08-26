var a = prompt("Please enter the Basic Salary of Employee");
var b = Number(a);
var HRA;
var DA;
var gross;
if (b <= 10000) {
    HRA = (b / 100) * 20;
    DA = (b / 100) * 80;
    gross = b + HRA + DA;
    alert("The HRA is " + HRA + " and DA is " + DA + " and the Gross Salaray is " + gross);
}
else if (b <= 20000) {
    HRA = (b / 100) * 25;
    DA = (b / 100) * 90;
    gross = b + HRA + DA;
    alert("The HRA is " + HRA + " and DA is " + DA + " and the Gross Salaray is " + gross);
}
else {
    HRA = (b / 100) * 30;
    DA = (b / 100) * 95;
    gross = b + HRA + DA;
    alert("The HRA is " + HRA + " and DA is " + DA + " and the Gross Salaray is " + gross);
}
