let num=20;
if(num<1)
{
    console.log("Factorial dose not exist")
}
else if(num==0)
{
    console.log("Factorial is 1")
}
else{
    var fact=1;
    for(i=1;i<=num;i++)
    {
        fact*=i;//fact=fact*i
    }
    
}
console.log("The factorial is:"+ fact)
