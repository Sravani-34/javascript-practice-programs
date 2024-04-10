function myarray()
{
    let array=[5, 2, 8, 12, 3]
    let min=array[0];
    for(i=0;i<array.length;i++)
    {
        if(array[i]<min)
        {
            min=array[i]
        }
    }
    console.log(min)
}
myarray();