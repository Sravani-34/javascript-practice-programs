function anagram(a,b)
{
    if(a.length!==b.length)
    {
       console.log("Invalid string");
       return false;
    }
    
    
let str1=a.split("").sort().join("");
let str2=b.split("").sort().join("");
if(str1==str2)
{
    console.log("anagram")
}
else{
    console.log("not anagram")
}
}
anagram("Hello", "oHknlk")
