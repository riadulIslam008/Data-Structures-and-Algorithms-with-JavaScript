// Delete Heaps is simple concept

// remove frist node of heaps replace the last noe as frist node.

// but i am not going to do it, 
// frist swap first and last Heaps node 
//then remove the last heaps node with array.pop() method

//And Last Most Important thing is we should check the heapsArray. Is it max Heaps? that's why call max_heapify  


 function remove_heaps_node(heapsArray) {
     let lastIndex= heapsArray.length -1;
    //swap frist and last Index
     [heapsArray[0] , heapsArray[lastIndex]] = [heapsArray[lastIndex], heapsArray[0]]
     console.log(heapsArray);
     //remove the last one
     heapsArray.pop();
     console.log(heapsArray);

    //call -- max_heapify function from previous page

   max_heapify(heapsArray, heapsArray.length, 0);
 }


//this section is from Build Max Heap.js
function max_heapify(array, heapArraySize, index) {
    let leftChild, rightChild;

    // i don't know parent Node index is largest Node or not!
    // if it is largest then i should not do anything
    // if not then find largest One. 
    let largestChild = index;

    leftChild = findLeftChild(index);
    rightChild = findRightChild(index);

    // Frist go leftChild and check largest?
    if (leftChild <= heapArraySize && array[leftChild] > array[index]) largestChild = leftChild;

    // Secound check Right Child 
    if (rightChild <= heapArraySize && array[rightChild] > array[largestChild]) largestChild = rightChild;

    // if we find someThing is largest parent Node index then swap 
    // when we swap parent index and largest index.we also check rest of node is max heap or not,.
    if (largestChild != index) {
        [array[index], array[largestChild]] = [array[largestChild], array[index]];
        max_heapify(array, array.length - 1, largestChild)
    }
}

function findLeftChild(parentIndex) {
    return (2 * parentIndex) + 1;
}

function findRightChild(parentIndex) {
    return (2 * parentIndex) + 2;
}

let heapArray = [11, 10, 9, 8, 5, 6, 3];
remove_heaps_node(heapArray);
console.log(heapArray);