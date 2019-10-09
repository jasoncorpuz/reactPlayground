import React from 'react';
// The component should render a div element. Inside the div there should be a p that contains content of either "tick", "tock" or "BOOM!!!!".
// The component will have an initial state with a property count of 0.
// When the component mounts, register an interval that adds one to the count in state every second.
// When the component unmounts, clear the interval.
// When the count is divisible by 2, display the word "tick".
// When the count isn't divisible by 2, display the word "tock".
// If the count goes equal to or above 8, display "BOOM!!!!".
// When the count goes above or equal to 8, also clear the interval!
// Tips:

// To check if a number is divisible by 2, you can use the modulo operator.
// An interval will repeatedly invoke a callback as often as specified by the milliseconds argument.
// You can create an interval by using let interval = setInterval(callback, timeInMs).
// You can clear an interval by using clearInterval(interval).

class Bomb extends React.Component {
    
    constructor() {
        super()
        console.log('this is super!')
        this.state = {count: 0 }
    }
    
    componentDidMount() {
        console.log('component mounted!') // set interval here
       this.interval = setInterval(() => {
           this.setState({
               count: this.state.count + 1
           })
       }, 1000)
    }

    renderDisplay(){
        const { count } = this.state
        if(count >= 8) {
            clearInterval(this.interval)
            return'BOOM!'
        } else if (count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
    }

  

    componentWillUnmount() {
        clearInterval(this.interval)
      }
    

    render() {
        
        return(
            <div>
                {this.renderDisplay()}
            </div>
        )
    }
}

export default Bomb;