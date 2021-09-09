//
// ─── SELECTION SORT ─────────────────────────────────────────────────────────────
//

/* 
1.have to Find the small number from array
2.And put the small number in array frist element,
3. Continue this section
*/

function selectionSort(array) {
    let index_min;
    for (var i = 0; i < array.length; i++) {
        index_min = i;

        for (var j = i + 1; j < array.length; j++) {
            if (array[index_min] > array[j]) {
                index_min = j;
            }

        }
        if (index_min != i) {
            [array[i], array[index_min]] = [array[index_min], array[i]];
        }

    }
    return array;
}

console.log(selectionSort([10, 5, 2, 6, 3]));

//
// ─── SPACE & Time COMPLEXITY ─────────────────────────────────────────────────────────────
//

/*
*Time complexity -------> O(n^2)[We use two for loop.
for loop time complexity is O(n), so two for loop will take O(n^2).
comapare section time complexity is O(1)]

*space Complexity ------> It can't tak eany new array.So, space complexity will 0.
*/