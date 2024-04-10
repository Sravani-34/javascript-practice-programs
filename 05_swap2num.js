//Swap Two Variables
var a=5;
var b=6;
var temp;
temp=a;//5 temp=5;
a=b;//  a=6;
b=temp;// b=5
console.log(a);
console.log(b);

//Another Method
function swap(a,b)
{
    return [a,b]=[b,a];
}
var a=10;
var b=20;
console.log(swap(a,b))

