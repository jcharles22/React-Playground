import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props) 
        this.state ={
            count : 0,
            word: 'tick'
        }
     

    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log(this.state.count)
          const newCount = this.state.count + 1
          this.setState({
            count: newCount
          })
          if(this.state.count < 8){
            if(this.state.count % 2 ===0) {
                this.setState({word:'tick'})
            } else if(this.state.count % 2 !== 0) {
                this.setState({word:'tock'})
            }
         } else if (this.state.count = 8){
             this.setState({word:'boom'})
             clearInterval(this.interval)
         }
        }, 1000)
      }
    


    render() {
        return (
            <div>
                <p>{this.state.word}</p>
            </div>
        )
    }


}

export default Bomb