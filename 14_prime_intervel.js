var num=10;
for(let i=1;i<=num;i++)////printing the num from 1 to 5
{
let Isprime=true;
for(let j=2;j<i;j++)//2<1
{
    if(i%j==0)
    {
        Isprime=false;
    }
}
if(Isprime==true)
{
    console.log(i+ " "+"is prime number");
}
else
{
    console.log(i+"  "+ "is not prime number")

}


}