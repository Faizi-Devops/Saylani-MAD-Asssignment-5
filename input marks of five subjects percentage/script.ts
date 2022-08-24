//physics
var a:string|null=prompt("Enter the Physics Total Marks");
var b:number = Number(a);
var c:string|null=prompt("Obtained Marks");
var d :number= Number(c);

var physics:number = d/b*100;
alert("The percentage  of physics is " + physics + "%");

//chemistry

var e:string|null=prompt("Enter the Chemistry Total Marks");
var f:number = Number(e);
var g:string|null=prompt("Obtained Marks");
var h :number= Number(g);

var chemistry:number = h/f*100;
alert("The percentage  of Chemistry is " + chemistry + "%");


//Biology

var i:string|null=prompt("Enter the Biology Total Marks");
var j:number = Number(i);
var k:string|null=prompt("Obtained Marks");
var l :number= Number(k);

var biology:number = l/j*100;
alert("The percentage  of Biology is " + biology + "%");


//Mathematics


var m:string|null=prompt("Enter the Mathematics Total Marks");
var n:number = Number(m);
var o:string|null=prompt("Obtained Marks");
var p :number= Number(o);

var mathematics:number = p/n*100;
alert("The percentage  of Mathematics is " + mathematics + "%");

//Computer


var q:string|null=prompt("Enter the Computer Total Marks");
var r:number = Number(q);
var s:string|null=prompt("Obtained Marks");
var t :number= Number(s);

var computer:number = t/r*100;
alert("The percentage  of Computer is " + computer + "%");


var percentage:number=(physics+chemistry+biology+mathematics+computer)/5;


alert(percentage);


if(percentage>=90 && percentage<=100){
    alert("Grade A")
}
else if (percentage>=80 && percentage<=89){
    alert("Grade B")

}
else if (percentage>=70 && percentage<=79){
    alert("Grade C")

}
else if (percentage>=60 && percentage<=69){
    alert("Grade D")

}
else if (percentage>=40 && percentage<=59){
    alert("Grade E")

}
else{
    alert("Grade F")
}





