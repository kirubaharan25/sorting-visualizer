import React, { Component } from 'react';
import './Array.css';

class Array extends Component {
    constructor() {
        super();

        this.state = {
            array : [],
        };

    }

    /// Inefficient Randomiser
    randomise = () => {
        this.setState({array : []})
        
        var randomNumber0 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber1 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber2 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber3 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber4 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber5 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber6 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber7 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber8 = Math.floor(Math.random() * 100) + 1 ;
        var randomNumber9 = Math.floor(Math.random() * 100) + 1 ;

        if (randomNumber0 === randomNumber1) {
            randomNumber1 = Math.floor(Math.random() * 100) + 1;
        } 
        if (randomNumber1 === randomNumber2) {
            randomNumber2 = Math.floor(Math.random() * 100) + 1;
        } 
        if (randomNumber2 === randomNumber3) {
            randomNumber3 = Math.floor(Math.random() * 100) + 1;
        } 
        if (randomNumber3 === randomNumber4) {
            randomNumber4 = Math.floor(Math.random() * 100) + 1;
        }
        if (randomNumber4 === randomNumber5) {
            randomNumber5 = Math.floor(Math.random() * 100) + 1;
        }
        if (randomNumber5 === randomNumber6) {
            randomNumber6 = Math.floor(Math.random() * 100) + 1;
        }
        if (randomNumber6 === randomNumber7) {
            randomNumber7 = Math.floor(Math.random() * 100) + 1;
        }
        if (randomNumber7 === randomNumber8) {
            randomNumber8 = Math.floor(Math.random() * 100) + 1;
        }
        if (randomNumber8 === randomNumber9) {
            randomNumber9 = Math.floor(Math.random() * 100) + 1;
        }
        this.setState({ array: [ randomNumber0, randomNumber1 , randomNumber2 , randomNumber3 , randomNumber4 , randomNumber5 , randomNumber6 , randomNumber7 , randomNumber8 , randomNumber9]});
    }

    render() {
        
        return (
            <div>
                <ul>
                    {this.state.array.map(item => (<li>{item}</li>))}
                </ul>

                <button onClick={this.randomise}>Create New Array</button>
            </div>
        )
    }
}

export default Array;