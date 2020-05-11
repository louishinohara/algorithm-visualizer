import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
   }

// When the component loads for the first time, this function is called
    componentDidMount() {
        this.resetArray();
    }

// Function to clear array values and fill it will 100 random numbers
// Includes duplicate values
    resetArray() {
        const array = [];
        for (let i = 0; i <= 100; i++){
            array.push(randomIntFromInterval(5,1000));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;
        return (
            <> {array.map((value,idx) => (
                                                    
                <div className = "array-bar" key={idx}>   {/* Key With Index For Iterables */}
                                                    
                {value}         {/* Value of our array */}
                </div>
                ))}
            </>
                );

            }
}

// Random Integer Generator
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}