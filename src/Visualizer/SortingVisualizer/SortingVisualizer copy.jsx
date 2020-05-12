import React from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from './sortingAlgorithms/mergeSort.js';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

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
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
        }
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    // NOTE: This method will only work if your sorting algorithms actually return
    // the sorted arrays; if they return the animations (as they currently do), then
    // this method will be broken.
    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
        const array = [];
        const length = randomIntFromInterval(1, 1000);
        for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
        }
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        const mergeSortedArray = getMergeSortAnimations(array.slice());
        console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }


    render() {
        const {array} = this.state;
        return (
            <div className="array-container"> 
                    {array.map((value,idx) => (
                <div 
                    className = "array-bar" 
                    key={idx}                 
                    style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px` 
                            }}></div>   
                ))}
                <button onClick={() => this.resetArray()}> Generate New Array </button>
                <button onClick={() => this.mergeSort()}> Merge Sort </button>
                <button onClick={() => this.quickSort()}> Quick Sort</button>
                <button onClick={() => this.heapSort()}> Heap Sort </button>
                <button onClick={() => this.bubbleSort()}> Bubble Sort</button>
                {/* <button onClick={() => this.testSortingAlgorithms()}> Test Algorithm</button> */}
            </div>
        );
    }
}

// Random Integer Generator
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function arraysAreEqual(testArray, myArray) {
    if(testArray.length !== myArray.length) return false;
    for (let i = 0; i < myArray.length; i ++ ) {
        if (testArray[0] !== myArray[0]) return false;
    }
    return true;
}






// Add some timers eventually
// A way to test different sorting algorithms on the same array

// https://www.youtube.com/watch?v=pFXYym4Wbkc