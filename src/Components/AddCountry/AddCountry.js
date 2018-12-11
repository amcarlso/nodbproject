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
    console.log(this.props.priceInput)
    return(
      <div className= 'input-box'>
        <div id='userInput-style'>
          <div>
            <input placeholder='Add country name' value={this.props.input} onChange={(e) => this.props.handleUserInputFn(e.target.value)}/>
          </div>
          <div>
            <input placeholder='Price...' value={this.props.priceInput} onChange={(e) => this.props.handlePriceFn(e.target.value)}/>
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
