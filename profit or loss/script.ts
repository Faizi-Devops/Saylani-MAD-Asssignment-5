let a:string|null=prompt("Please enter the cost Price");
let b:number=Number(a);
let c:string|null=prompt("Please enter the selling price")
let d:number=Number(c);
let loss:number;
let profit:number;
if(b>d){
    loss=b-d;
    alert("The loss is " + loss + " rupees");

}
else if (b<d)
{
    profit=d-b;
    alert("The profit is "  + profit + " rupees");

}
else{
    alert("No lose no profit");
}