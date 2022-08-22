var a:string|null = prompt("Please enter the value");
var newa:number=Number(a);
var b:string|null = prompt("Please enter the value");
var newb:number=Number(b);
var c:string|null = prompt("Please enter the value");
var newc:number=Number(c);

if(newa>newb && newa>newc ){
    alert(newa + " is larger value");

}
else if (newb>newc && newb>newa){
    alert(newb + " is larger value" );

}

else {
    alert(newc+ " is larger value");
}

