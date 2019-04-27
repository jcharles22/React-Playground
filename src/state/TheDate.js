import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { datetime: new Date() };
        console.log('constructor')
      }
      componentDidMount() {
       
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }
      render() {
        console.log('render')
        return (
          <div>{this.state.datetime.toLocaleString()}</div>
        )
      }
}

export default TheDate