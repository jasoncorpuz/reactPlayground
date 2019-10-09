import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { datetime: new Date()};
        console.log('constructor')
        }
    componentDidMount() {
        this.interval = setInterval(() => {
        console.log('set interval')
        this.setState({
            datetime: new Date()
        })
          }, 1000)
          }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        console.log('render')
        return <div>{this.state.datetime.toLocaleDateString()}</div>
    }
}

export default TheDate;