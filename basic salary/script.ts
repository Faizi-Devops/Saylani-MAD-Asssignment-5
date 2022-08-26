let a:string|null = prompt("Please enter the Basic Salary of Employee");
let b :number = Number(a);

let HRA:number;
let DA:number;

if(b<=10000)
{

    HRA=(b/100)*20;
    DA=(b/100)*80;

    alert("The HRA is " + HRA + " and DA is " + DA);


}
else if (b<=20000){
    HRA=(b/100)*25;
    DA=(b/100)*90;

    alert("The HRA is " + HRA + " and DA is " + DA);
    

}

else{

    HRA=(b/100)*30;
    DA=(b/100)*95;

    alert("The HRA is " + HRA + " and DA is " + DA);
    

}