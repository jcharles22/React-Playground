import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props) 
        this.state ={
            chamber: null,
            spinningTheChamber: false
        }
    }
    clickHandler = () => {
        this.setState({
            spinningTheChamber: true,
          })
          this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
      
            this.setState({
              chamber: randomChamber,
              spinningTheChamber: false,
            })
          }, 2000)
    }

    display() {
        if(this.state.spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!...'
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!'
        } else {
            return "you're safe!"
        }
    }


    render(props) {
        return (
            <div>
                <p>{this.display()}</p>
                <button onClick={this.clickHandler}>
                    Pull the trigger
                </button>
            </div>
        )
    }


}

export default RouletteGun