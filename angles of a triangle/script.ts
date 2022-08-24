var a:string|null=prompt("Please enter the first angle value");
var b:number=Number(a);
var c:string|null=prompt("Please enter the second angle value");
var d:number=Number(c);
var e:string|null=prompt("Please enter the third angle value");
var f:number=Number(e);

var total:number =b+d+f;
if(total==180){
    alert("The traingle is valid");
} 
else{
    alert("The traingle is not valid");
}