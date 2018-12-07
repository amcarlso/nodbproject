import React, {Component} from 'react'
import axios from 'axios';
import AddCountry from './../AddCountry/AddCountry'

class Post extends Component {
  constructor(props){
    super(props)

  
  }
  



  render(){
    return(
      <div>
        <p>{this.props.country}</p>
      </div>
    )
  }
}

export default Post