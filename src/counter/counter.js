import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    };
    handleButtonClick = () => {
        console.log(this.props)
        console.log(this.state)
        const newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    render() {
        return (
            <div>
                <p>the current count: {this.state.count}</p>
                <button
                  onClick={this.handleButtonClick} 
                   >
                    add 1
                </button>
            </div>
        )
    }
}

export default Counter;