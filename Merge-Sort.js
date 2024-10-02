console.log('Welcome A$D to merge sort!!');
//This function is used for dividing the array into the smallest individual items(until the left and right arrays reach with only one element)
function mergeSortDivide(array){
    if(array.length===1){
        return array;
    }
    let middle=Math.floor(array.length/2);//For finding the middle index so that it can divide it into two arrays left and right
    let left=array.slice(0,middle);
    let right=array.slice(middle);

    return mergeSort(mergeSortDivide(left),mergeSortDivide(right));//Sorting the left and right arrays starting from the smallest divided arrays until the whole array is sorted
}
//This function is used for comparing the left and right arrays and generating a sorted array from their comparison
function mergeSort(left,right){
    let sortedArray=[];//holds the sorted array
    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex<left.length&&rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));//Used to add the remaining elements from either left or right array
}

let myArray=[34,7,23,32,95,5,62];
let test=mergeSortDivide(myArray);
console.log(test);