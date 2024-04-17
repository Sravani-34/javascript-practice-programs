let num=153;
let temp=num;
let sum=0;
while(temp!=0)
{
    let remainder=temp%10;//3----5
    sum+=remainder*remainder*remainder;//0+3*3*3=27+----27+5*5*5+1
    temp=Math.floor(temp/10)//153/10=15--1
}
if(sum==num)
{
    console.log("The given number is armstrong")
}
else{
    console.log("The given number is not armstrong")
}