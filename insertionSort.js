let arr = [10,20,30,50,40];

function insertionSort(array){
  for(var i=1; i< array.length; i++){
    let currentItem = array[i]; //2,3,5
    let j = i-1; //1,2,3


       // 10 > 20
       // 20 > 30
       // 30 > 40
       // 50> 40 Right i = 4, j =3

    while (arr[j] > currentItem && j >=0){ 
     arr[i] = arr[j];
     j--;
    }
    arr[j+1] = currentItem;
  }
  return arr
}

console.log(insertionSort(arr));