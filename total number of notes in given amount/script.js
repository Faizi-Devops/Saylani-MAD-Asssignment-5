var a = 8;
if (a >= 1000) {
    alert("The notes of the 1000 in amount 5000 is " + Math.trunc(a / 1000));
    a = a % 1000;
}
if (a >= 500) {
    alert("The notes of the 500 in amount 5000 is " + Math.trunc(a / 500));
    a = a % 500;
}
if (a >= 100) {
    alert("The notes of the 100 in amount 5000 is " + Math.trunc(a / 100));
    a = a % 100;
}
if (a >= 50) {
    alert("The notes of the 50 in amount 5000 is " + Math.trunc(a / 50));
    a = a % 50;
}
if (a >= 10) {
    alert("The notes of the 10 in amount 5000 is " + Math.trunc(a / 10));
    a = a % 10;
}
if (a >= 5) {
    alert("The rupees of the 5  in amount 5000 is " + Math.trunc(a / 5));
    a = a % 1000;
}
if (a == 4) {
    alert("The rupees of the 4 in amount 5000 is " + Math.trunc(a / 4));
    a = a % 4;
}
if (a >= 3) {
    alert("The rupees of the 3 in amount 5000 is " + Math.trunc(a / 3));
    a = a % 3;
}
if (a == 2) {
    alert("The rupees of the 2 in amount 5000 is " + Math.trunc(a / 2));
    a = a % 2;
}
if (a >= 1) {
    alert("The rupees of the 1 in amount 5000 is " + Math.trunc(a / 1));
    a = a % 1;
}
