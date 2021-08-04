

export default function selectionSort(y) {
    var array = y;
    var length = array.length;

    for(let i = 0; i < length; i++) {
        var smallest = array[i];
        var smallestIndex = i;

        for(let j = 0; j < length; j++) {
            if (array[j] < smallest) {
                smallest = array[j];
                smallestIndex = j;
            }
        }
        swap(array[i], array[smallestIndex]);
    }
    return array;
}