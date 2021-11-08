function quick_sort(array, low, high) {
    if(low < high){
    

     let p;
        p = partition(array, low, high);
        quick_sort(array, low, p-1);
        quick_sort(array, p+1, high);
    }
}

function partition(array, low, high) {
    let i= low -1;
    let pivot = array[high];
    for (var j = low; j <= high-1; j++){
         if(array[j] < pivot){
             i++;
             [array[i], array[j]] = [array[j], array[i]];
         }   
        
    }
    [array[i+1], array[high]] = [pivot, array[i+1]];
        return i+1;
}

let array = [3,8,7,5,9,6];
quick_sort(array, 0, array.length-1);
console.log(array);