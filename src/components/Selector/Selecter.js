import React from 'react';


function Selector(){
    return (
        <div class="selection box">
            <div class="Options">
                Select a sorting algorithm:
                <input type="button" value="bubble" name="sortAlgorithm" > Bubble Sort </input>
                <input type="button" value="merge" > Merge Sort</input>
                <input type="button" value="quick" > Quick Sort</input> 
            </div>
        </div>
    );
}

export default Selector;