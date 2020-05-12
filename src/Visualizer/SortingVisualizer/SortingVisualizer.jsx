import React from 'react';
import { getMergeSortAnimations } from './sortingAlgorithms/mergeSort.js';
import { Button } from '@material-ui/core';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import Slider from '@material-ui/core/Slider';
import ResizeDetector from 'react-resize-detector';
import './SortingVisualizer.css';

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
// # of Bars

// Marks for the speed of algorithm on slider
    const speed = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 40,
        label: '40',
    },
    {
        value: 60,
        label: '60',
    },
    {
        value: 80,
        label: '80',
    },
    {
        value: 100,
        label: '100',
    },
    ];

export default class SortingVisualizer extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            width: 0,
            height: 0,
            barHeight: 0.85,            // Changes the size of the height of the bars to scale page
            BAR_WIDTH: 4,
            ANIMATION_SPEED_MS: 1,
            NUMBER_OF_ARRAY_BARS: 100,   // Change this value for the number of bars (value) in the array.
            MAX_NUMBER_OF_BARS: 175,

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
        array.push(randomIntFromInterval(5, 730) * this.state.barHeight);
        }
        this.setState({array});
    }

// Changes the Number of Bars in the algorithm
    changeBarCount(bars) {
        var NUMBER_OF_ARRAY_BARS = bars;
        this.setState({NUMBER_OF_ARRAY_BARS});
        this.resetArray();
    }

// Changes the speed of the Algorithm
    changeSpeed(time) {
        var ANIMATION_SPEED_MS = time;
        this.setState({ANIMATION_SPEED_MS});
    }

// Changes the max value of the slider depending on the width of the screen
    getDimensions(width,height) {
        // Changes the number of bars depending on the width of the screen
        var MAX_NUMBER_OF_BARS = Math.floor(width / 6.5);

        // SETS THE MAX NUMBER OF BARS FOR THE PAGE
        this.setState({MAX_NUMBER_OF_BARS});

        // Sets the size of the bar width depending on the number of bars
        var BAR_WIDTH = width / (this.state.NUMBER_OF_ARRAY_BARS * 1.65);
        this.setState({BAR_WIDTH});

        // Changes the height of the bar depending on the size of the screen
        var barHeight = Math.floor(width / height) * .4;
        // this.setState({barHeight});


// NEED TO CREATE A FUNCTION THAT DECREASES THE CURRENT NUMBER OF ARRAY BARS IF THE SCREEN SIZE IS BEING SHRUNK

    // If the Current Number Of Bars exceeds the max amount of bars available on screen, make it max
        // if (this.state.NUMBER_OF_ARRAY_BARS > MAX_NUMBER_OF_BARS * .55) {
        //     var NUMBER_OF_ARRAY_BARS = MAX_NUMBER_OF_BARS;
        //     var adjustedVal = this.MAX_NUMBER_OF_ARRAY_BARS - this.state.NUMBERS_OF_ARRAY_BARS;
        //     this.state.array.splice(adjustedVal);



            
        //     // this.changeBarCount(MAX_NUMBER_OF_BARS);
        // }
        // else {
        //     this.setState({MAX_NUMBER_OF_BARS});
        // }
        
        // this.setState({barHeight});
        // console.log(barHeight);
    };


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
            barOneStyle.height = `${newHeight * this.state.barHeight}px`;
            }, i * this.state.ANIMATION_SPEED_MS);
        }
        }
    }

 
    render() {
        const {array} = this.state;
    // Ticks for the # of bars on the slider
        var bars = [
            {
                value: 0,
                label: '0',
            },
            {
                value: Math.floor(this.state.MAX_NUMBER_OF_BARS * .2),
                label: `${Math.floor(this.state.MAX_NUMBER_OF_BARS * .2)}`,
            },
            {
                value: Math.floor(this.state.MAX_NUMBER_OF_BARS * .4),
                label: `${Math.floor(this.state.MAX_NUMBER_OF_BARS * .4)}`,
            },
            {
                value: Math.floor(this.state.MAX_NUMBER_OF_BARS * .6),
                label: `${Math.floor(this.state.MAX_NUMBER_OF_BARS * .6)}`,
            },
            {
                value: Math.floor(this.state.MAX_NUMBER_OF_BARS * .8),
                label: `${Math.floor(this.state.MAX_NUMBER_OF_BARS * .8)}`,
            },
            {
                value: this.state.MAX_NUMBER_OF_BARS,
                label: `${Math.floor(this.state.MAX_NUMBER_OF_BARS)}`,
            },
        ];
// const classes = useStyles();
        return (
            <div style={{
                        paddingLeft: '250px',
                        paddingRight: '50px'
                        }}> 
                <div className="array-container"> 
                        {array.map((value,idx) => (
                    <div 
                        className = "array-bar" 
                        key={idx}                 
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value * this.state.barHeight}px`,
                            width : `${this.state.BAR_WIDTH}px`,
                                }}>   
                    </div>   
                    ))}
                    <ResizeDetector
                        handleWidth
                        handleHeight
                        onResize={(width,height)=> this.getDimensions(width,height)}
                        render={({ width, height }) => (
                            <div>
                            Width:{width}, Height:{height}
                            </div>
                        )}
                    />
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
                    <Slider
                        defaultValue={this.state.NUMBER_OF_ARRAY_BARS}
                        min={0}
                        max={this.state.MAX_NUMBER_OF_BARS}
                        aria-labelledby="discrete-slider-always"
                        step={1}
                        onChange={ (e, val) => this.changeBarCount(val) } 
                        marks={bars}
                        valueLabelDisplay="on"
                    />
                    <Slider
                        defaultValue={this.state.ANIMATION_SPEED_MS}
                        max={100}
                        aria-labelledby="discrete-slider-always"
                        step={1}
                        onChange={ (e, val) => this.changeSpeed(val) } 
                        marks={speed}
                        valueLabelDisplay="on"
                    />

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

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
  
// }));