let a:string|null=prompt("Please enter the first angle");
let b:number=Number(a);

let c:string|null=prompt("Please enter the second angle");
let d:number=Number(c);

let e:string|null=prompt("Please enter the second angle");
let f:number=Number(e);

if(b==d && d==f){
    alert("The Traingle is Equiletral");
}
else if(b==d || d==f || f==b)
{
    alert("The Triangle is Icosceles");
}
else{
    alert("The Traingle is Scalene")

}




