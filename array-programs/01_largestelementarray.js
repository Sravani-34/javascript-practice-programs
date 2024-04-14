/*let array=[10,20,30,40,50,60]
console.log(Math.max(...array))*/


function max1(myarray){
    
   let max=myarray[0];
for(i=0;i<myarray.length;i++){
    if(myarray[i]>=max)
    {
    max=myarray[i];
    
}   
}
console.log(max);
}
max1([1000,20,3000,40,50,100]);