function noofocuurence(string,char)
{
    
    let count=0;
    for(i=0;i<string.length;i++)
    {
        if(string[i]==char)
        {
            count++;
        }                                            
    }
    console.log(count)  
}
noofocuurence("Helloooooiii",'o')