let num=800;
for(let i=1;i<=num;i++)
{
    let temp=i;
    let sum=0;
    let lengthofthenum=i.toString().length;
    while(temp!=0)
    {
        let remainder=temp%10;
        sum+=Math.pow(remainder,lengthofthenum)
        temp=Math.floor(temp/10);
    }
    if(sum==i)
    {
        console.log(i)
    }
}