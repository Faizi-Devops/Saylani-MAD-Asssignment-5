let a:string|null = prompt("Please enter the number");
let b :any = Number(a);
if(b=="1"){
    alert("The day is Monday")

}
else if (b=="2"){
    alert("The day is Tuesday")
}
else if (b=="3"){
    alert("The day is Wednesday")
}
else if (b=="4")
{
    alert("The day is Thursday")
}
else if(b=="5")
{
    alert("The Day is Friday")
}
else if(b=="6")
{
    alert("The Day is Saturday")
}
else if(b=="7")
{
    alert("The Day is Sunday")
}
else{
    alert("Please enter the correct week number and remember the week day start from 1")
}