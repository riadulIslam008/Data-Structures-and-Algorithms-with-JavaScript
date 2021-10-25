function merge_sort(arr, left, right) {


   // console.log(mid);

   if (left < right) {
      var mid = Math.floor(left + (right - left) / 2);
      // left Side
      merge_sort(arr, left, mid);
      //right side
      merge_sort(arr, mid + 1, right);
      merge(arr, left, mid, right);
   }

}

function merge(arr, left, mid, right) {
   //Temporary Array
   let tempArray = [];

   //i = always Track the frist Element
   //j = always Track the mid Element
   //k = this is Temporary array index Tracker
   let i = left, j = mid + 1, k = left;

   while (i <= mid && j <= right) {
      //tempArray[k++] ==== tampArray[k] and then incrise the value of k
      if (arr[j] > arr[i]) tempArray[k++] = arr[i++];
      tempArray[k++] = arr[j++];
   }

   while (i <= mid) {
      tempArray[k++] = arr[i++];
   }

   while (j <= right) {
      tempArray[k++] = arr[j++];
   }


   //Send Temporary Sorted Element into Main Array
   for (var x = left; x <= right; x++) {
      arr[x] = tempArray[x];
   }

   //* ==== Space Complexity ==== O(n) , n= main Array length. In merge Function used a new Array and his max is main Array length.
}
let array = [10, 8, 4, 1, 7, 3, 9, 5];
let left = 0;
let right = array.length - 1;

merge_sort(array, left, right);
console.log(array);
