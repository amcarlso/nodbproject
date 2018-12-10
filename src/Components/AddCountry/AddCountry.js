import React, {Component} from 'react'
import './AddCountry.css'

class AddCountry extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    }

    
  }
  
  
  render(){
    return(
      <div className= 'input-box'>
        <div id='userInput-style'>
          <div>
            <input value={this.props.input} onChange={(e) => this.props.handleUserInputFn(e.target.value)}/>
          </div>
          <div>
            <button onClick= {this.props.handleAddCountryFn} >Add Country</button> 
          </div>
        </div>
        </div>
    )
  }
}

export default AddCountry;
