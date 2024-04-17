function fibnocii(num)
{
    var num1=0;
    var num2=1;
    var  num3=0;
    
    for(let i=0;i<=num;i++)
    {
        console.log(num1);//0
      num3=num1+num2;//1 
      num1=num2;//1 1
      num2=num3;//1 2
    }return num3;
}
var num=5;
console.log(fibnocii(num));
