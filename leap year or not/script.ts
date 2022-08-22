let a:string|null=prompt("Please enter the number");
let newa:number = Number(a);
if(newa%4==0)
{
    alert(newa + " is leap year")
}

else{
    alert(newa + " is not a leap year");
}