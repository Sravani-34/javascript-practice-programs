function palindrome(string)
{
    let rev="";
    for(i=string.length-1;i>=0;i--)
    {
       rev+=string[i];
    }
       if(rev==string)
       {
       return true;
       }
       else{
        return false;
       }
    
}
let str1="rar";
let str2="heolloe";
console.log(palindrome(str1));
console.log(palindrome(str2));

