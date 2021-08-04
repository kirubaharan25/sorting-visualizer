import React from 'react';
import './App.css';
import Selector from '../Selector/Selecter';
import Visualizer from '../Visualizer/Visualizer';
import bubbleSort from '../../Algorithms/BubbleSort';
import selectionSort from '../../Algorithms/SelectionSort';
import Array from '../Array/Array';


function runAlgorithm() {
  var result = [];
  if(Selector.sort==="bubble") {
    result = bubbleSort(Array.array);
    
  }

  if(Selector.state.sort) {
    result = selectionSort(Array.array);
  }
  console.log(result);
}

function App() {
  return (
    <div>
      <center><h1>Sorting Visualizer</h1></center>
      < Selector />
      < Visualizer />
      <button onClick={runAlgorithm}> Run Sorting Algorithm </button>
    </div>
  );
}

export default App;
