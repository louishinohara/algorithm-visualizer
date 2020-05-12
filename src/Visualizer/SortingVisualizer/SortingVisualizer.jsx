import React from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimations } from './sortingAlgorithms/mergeSort.js';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import MergeTypeIcon from '@material-ui/icons/MergeType';
// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            ANIMATION_SPEED_MS: 1,
            NUMBER_OF_ARRAY_BARS: 280   // Change this value for the number of bars (value) in the array.
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
        for (let i = 0; i < this.state.NUMBER_OF_ARRAY_BARS; i++) {
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
            }, i * this.state.ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * this.state.ANIMATION_SPEED_MS);
        }
        }
    }

    render() {
        const {array} = this.state;
        // const classes = useStyles();
        return (
            <div>
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
                </div>
                <div className = "menu-items">
                    {/* <button onClick={() => this.resetArray()}> Generate New Array </button>
                    <button onClick={() => this.mergeSort()}> Merge Sort </button> */}
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{margin: 20}}
                        size="large"
                        onClick={() => this.resetArray()}
                        >
                        Generate New Array
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{margin: 20}}
                        size="large"
                        startIcon={<MergeTypeIcon />}
                        onClick={() => this.mergeSort()}
                        >
                        Merge Sort
                    </Button>
                </div>
            </div>
        );
    }
}

// Random Integer Generator
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// https://www.youtube.com/watch?v=pFXYym4Wbkc

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));