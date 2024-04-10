function capital(string)
{
    let name=string.split(" ");
            for(i=0;i<name.length;i++) {
             
               // console.log(name[i])
              name[i] = name[i][0].toUpperCase()+name[i].substring(1); 
              //  x.substring(0,1)

            }
            return name.join(" ");
    

}

console.log(capital("Hello iam sravani"));
console.log(capital("hi hello my name is sravani"));