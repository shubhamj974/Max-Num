let cl = console.log;

// Find largest number 
function findMax(arr){
    let max = arr[0];
    arr.forEach(arr => arr > max ? max = arr : arr)
    return max
}
cl(findMax([5,6,78,9,10,12,50,1]))
cl(findMax([56,55,10,111,5,15,22,66,100,40]))


// Find Smallest number from the given array

function findMin(arr){
    let min = arr[0]
    arr.forEach(ele => {
        if(ele < min){
            min = ele
        }
    })
    return min
}
cl(findMin([5,6,78,9,10,12,50,1]))
cl(findMin([56,55,10,111,5,15,22,66,100,40]))
cl(findMin([900,500,300,400,50,600]))

