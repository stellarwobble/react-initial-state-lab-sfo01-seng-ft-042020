// your Bomb code here
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    displayCountdown(){
        if (this.state.secondsLeft === 0){
           return "Boom!"
        }
       
        return `${this.state.secondsLeft} seconds left before I go boom!`
        
    }

    render() {
        return (
            <div>{this.displayCountdown()}</div>
        )

    }
}