//JavaScript Program to Make a Simple Calculator
var num1=10;
var num2=20;
var result;
var operator="-";

if(operator=="+")
{
 result=num1+num2;
}
else if(operator=="-")
{
    result=num1-num2;
}
else if(operator=="*"){
result=num1*num2;
}
else{
    result=num1/num2;
}

console.log(num1+(operator)+num2+"="+result);