/*function convertcamel(string)
{
    let camel_name=string.split(" ");
    for(i=0;i<camel_name.length;i++){
    camel_name[i]=camel_name[i][0].toUpperCase()+camel_name[i].substring(1);

}
return camel_name.join("");
}
console.log(convertcamel("Hello iam sravani iam form stockholm"));*/

function camelcase(string)
{  
    
    return string.replace(/[^A-Za-z0-9](.)/g,( _,char) => char.toUpperCase())
}
console.log(camelcase("hello iam sravani iam from india how r u"));
