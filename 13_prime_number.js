//JavaScript Program to Check Prime Number
let num=6;
let Isprime=true;
if(num==1)
{
    console.log("The given number is nither prime number nor composite")
}
else if(num>1)
{
 for(let i=2;i<num;i++)
 {
    if(num%i==0)
    {
        Isprime=false;
        break;
    }
 }
}
 if(Isprime==true)
 {
    console.log("The given number is prime number");
 }
 else{
    console.log("The given number is not prime number")
 }
