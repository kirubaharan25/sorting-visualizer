import React, {useContext} from "react";
import UserContext from "../components/User/User";

const Values = useContext(UserContext)
export default function selectionSort() {
    array = Values.array;
    var length = array.length;

    for(let i = 0; i < length; i++) {
        var smallest = array[i];
        var smallestIndex = i;

        for(let j = 0; j < length; j++) {
            if (array[j] < smallest) {
                smallest = array[m];
                smallestIndex = m;
            }
        }
        swap(array[i], array[smallestIndex]);
    }
    return array;
}