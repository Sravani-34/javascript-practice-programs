function vowelcount(str1){
let str=str1.toLowerCase();
let count=0;
for(i=0;i<str.length;i++)
{
   
if(str[i]=="a"||str[i]== "e" ||str[i]== "o"||str[i]=="i"||str[i]=="u")
{
   count++; 
}
}
console.log(count);
}
vowelcount("Hi Iam sravani Iam from sweden but my native is india")
