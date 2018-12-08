import React, {Component} from 'react'

class AddCountry extends Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      userInput:'event'
    })
  }
  
  render(){
    return(
      <div>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <button>Add Country</button>
      </div>
    )
  }
}

export default AddCountry;
