function fibs(number){
    
    if(number<2){
        return number;
    }
    else{
        
        const together = []

        fibs(number-1)+fibs(number-2)
        return together;  
    }  
    
}
fibs(25);
console.log(fibs(8));

console.log("This was Printed recursively fibs");

function mergeSort(arr){
    
    if(arr.length <=1)
    {
        return arr
    }
else{

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
   
return mergeSort(left,right)

}
}
mergeSort([3,2,1,13,8,5,0,1])
console.log("This was Printed recursively mergeSort");
console.log(mergeSort([3,2,1,13,8,5,0,1]));
