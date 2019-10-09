import React from 'react';

class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = { value: 'world'}
        console.log('hello constructor')
    }

    handleClick = (e) => {
        console.log('state in handle click', this.state)
        this.setState({value: e.target.value})
    }
    render() {
        return (
            <div>
                <p>Hello {this.state.value}</p>
                <button value ={'world'} onClick= {this.handleClick}>world</button>
                <button value={'react'} onClick= {this.handleClick}>react</button>
                <button value={'friend'} onClick= {this.handleClick}>friend</button>
            </div>
        )        
    }
}

export default HelloWorld;