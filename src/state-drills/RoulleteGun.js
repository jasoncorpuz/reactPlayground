import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handeClick}>Pull the trigger!</button>
            </div>
        )
    }

    handeClick = (e) => {
        this.setState({
            spinningTheChamber:true
        }) 
        setTimeout(()=>{
        const random = Math.floor(Math.random() * 8) + 1 
        console.log(random);
        this.setState({
            chamber: random,
            spinningTheChamber: false
        })

        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber} = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!'
        } else if (chamber === bulletInChamber) {
            return 'BANG! you dead'
        } else {
            return 'you\'re safe!'
        }
       
    }
}

export default RouletteGun;