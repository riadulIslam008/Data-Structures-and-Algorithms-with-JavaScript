//
// ─── BUBBLE SORT ────────────────────────────────────────────────────────────────
//

/* 
1.Comapare the frist two element .if Second one is smaller than frist one then swap their position.
Contuine this prosess.(2nd for loop will done this).bigger Element will be placed in last array.that's why 
 i am using arra.length-index in 2nd for loop;
*/

function bubbleSort(array) {
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length - index; j++) {

            if (array[j] > array[j + 1]) { 
                [array[j+1], array[j]] = [array[j], array[j+1]];
            }
        }

    }
    return array;
}

console.log(bubbleSort([10,5,2,8,7,6]));

//
// ─── SPACE AND TIME COMLEXITY ───────────────────────────────────────────────────
//

    /* 
    Time Complexity is ---> O(n^2) cz of two for loop
    Space Complexity is 0
    */