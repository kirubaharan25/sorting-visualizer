import React, {useContext} from "react";

export default function bubbleSort() {
    
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
};