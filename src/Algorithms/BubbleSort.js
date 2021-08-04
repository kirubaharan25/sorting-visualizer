import React, {useContext} from "react";
import UserContext from "../components/User/User";

const Values = useContext(UserContext)
export default function bubbleSort() {
    array = Values.array;
    var len = array.length;

    for(let i=0; i < len;i++) {
        for(let j=0; j< len;j++) {
            if(array[i] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
};