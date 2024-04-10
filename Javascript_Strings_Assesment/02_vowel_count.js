/*function noofvowel(str1){
    let vowel='aAeEiIoOuU';
    let count=0;

for(i=0;i<str1.length;i++){
    if(vowel.indexOf(str1[i])!==-1)
    {
        console.log("Vowel is found");
        count++;
        console.log(count)
        console.log("Total no of owels:"+count)
       
    }
}
}
noofvowel("Hello world");*/
function noofvowel(str1){
    
    let count=0;

for(i=0;i<str1.length-1;i++){
    if(str1[i]=="a"|| str1[i]=="e"||str1[i]=="i"|| str1[i]=="o"||str1[i]=="u")
    {
        console.log("Vowel is found");
        count++;
        console.log(count)
        console.log("Total no of owels:"+count)
       
    }
}
}
noofvowel("aeiou");