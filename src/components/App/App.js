import React from 'react';
import './App.css';
import Selector from '../Selector/Selecter';
import Visualizer from '../Visualizer/Visualizer';
import UserContext from '../User/User';
import Array from '../Array/Array';

function App() {
  return (
    <UserContext.Provider value={Array.array}>
      <center><h1>Sorting Visualizer</h1></center>
      < Selector />
      < Visualizer />
    </UserContext.Provider>
  );
}

export default App;
