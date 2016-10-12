// Conceptually, a merge sort works as follows:

// Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
// Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.



function merge(arr, start, middle, end, sorted){
  var i = start;
  var j = middle

  while(i < middle){
    if(arr[i] < arr[j]){
      sorted.push(arr[i])
    }
    i++
  }
}

// function mergeSort(arr, start, end, sorted){
//   if(end - being  < 2){
//     return;
//   }

//   var middle = Math.floor((start + end) / 2)
//   mergeSort(arr, start, middle, sorted)
//   merggSort(arr, middle, start, sorted)
//   merge(arr, start,middle, end, sorted)
// }

