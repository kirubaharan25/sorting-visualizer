import React, { Component } from 'react';
import './Selecter.css';

class Selector extends Component{
    constructor() {
        super();
    
        this.state = {
          sort: ''
        };
    }

    onRadioChange = (e) => {
        this.setState({
          sort : e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault(); //Prevents browser from refreshing after submit
        console.log(this.state);
    }
    
    render() {
    return (
        <div class="selection-box">
            <strong> Select a Sorting Algorithm</strong>
            <form onSubmit={this.onSubmit}>
                <div className="radio">
                    <label>
                        <input type="radio" value="bubble" checked={this.state.sort === "bubble"} onChange={this.onRadioChange}/>
                        Bubble Sort
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="merge" checked={this.state.sort === "merge"} onChange={this.onRadioChange}/>
                        Merge Sort
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="quick" checked={this.state.sort === "quick"} onChange={this.onRadioChange}/>
                        Quick Sort
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="select" checked={this.state.sort === "select"} onChange={this.onRadioChange}/>
                        Selection Sort
                    </label>
                </div>

                <button type="submit">Select Sorting Algorithm</button>
            </form>
        </div>
    );
    }
}

export default Selector;