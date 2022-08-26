var a = prompt("Please enter the cost Price");
var b = Number(a);
var c = prompt("Please enter the selling price");
var d = Number(c);
var loss;
var profit;
if (b > d) {
    loss = b - d;
    alert("The loss is " + loss + " rupees");
}
else if (b < d) {
    profit = d - b;
    alert("The profit is " + profit + " rupees");
}
else {
    alert("No lose no profit");
}
