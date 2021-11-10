
function insert_Node(array, insertItem) {

    array.push(insertItem);
    let i = array.length - 1;
    // console.log(array[i]);
    // console.log(array[parentIndex(i)]);
    while (i >= 1 && array[i] > array[parentIndex(i)]) {  //i=5, 30 > 9

        [array[parentIndex(i)], array[i]] = [array[i], array[parentIndex(i)]];
        // console.log(array);
        i = parentIndex(i);
    }
}

function parentIndex(childIndex) {

    return Math.floor((childIndex - 1) / 2);
}

var max_heapArray = [11, 10, 9, 5, 6];

insert_Node(max_heapArray, 30);
insert_Node(max_heapArray, 31);

console.log(max_heapArray);