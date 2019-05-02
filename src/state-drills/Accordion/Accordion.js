import React from 'react'


export default class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };

    constructor(props) {
        super(props)
        this.state = {
          active: 0
        }
        this.renderItem = this.renderItem.bind(this);
    }

    handleButton = (index) => {
      
        if(this.state.active === index) {
          this.setState({active: null})
        } else {
          this.setState({active:index})
        }
      }
    

    renderItem(item, index) {
      return (
        <li key={index}>
          <button type='button' 
          onClick={() => this.handleButton(index)} >
            {item.title}
          </button>
          {(index === this.state.active) ? <p>{item.content}</p>: ""}
        </li>
      )
    }

  render(props) {

  return (
      <ul className='Accordion'>
        {this.props.sections.map((item, index) => (
          this.renderItem(item, index)
          )
        )}
      </ul>
    )
  }
}

