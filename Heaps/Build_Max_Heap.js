let heapArray = [6, 8, 9, 10, 5, 3, 11];

function build_max_heap(array) {
    let arraySize = array.length;
    for (var i = Math.floor(arraySize / 2) -1 ; i >= 0; i--) {
        // When use Math.floor(arraySize /2) -1 , it will point a index 
        // where is last Parent Node whose have one or two children
        // it should be checked is it max Heap or not?
        max_heapify(array, arraySize, i)
    }
}

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
build_max_heap(heapArray)
console.log(heapArray);