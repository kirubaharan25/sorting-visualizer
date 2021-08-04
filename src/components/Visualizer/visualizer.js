import React, { Component } from 'react';
import './Visualizer.css';
import Array from '../Array/Array';

class Visualizer extends Component {
    render() {
        return(
            <div className="visualizer-box">
                Sorting Algorithm Visualizer
                < Array />
            </div>
        )
    }
}

export default Visualizer;