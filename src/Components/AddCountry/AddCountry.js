import React, {Component} from 'react'

class AddCountry extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    }

    
  }
  
  
  render(){
    return(
      <div>
          <input onChange= {(e) => this.props.handleUserInputFn(e.target.value)}/>
          <button onClick= {this.props.handleAddCountryFn} >Add Country</button> 
        </div>
    )
  }
}

export default AddCountry;
