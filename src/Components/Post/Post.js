import React, { Component } from 'react'
import './Post.css'
import SumTrips from 'react'


class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      input: this.props.country
    }
  }
  handleInputToggle() {
    if (this.state.edit === true) {
      this.setState({
        edit: false
      })
    } else {
      this.setState({
        edit: true
      })
    }
  }
  handleInputChanger(value) {
    this.setState({
      input: value
    })
  }


  render() {
    return ( 
      <div className='each-post'> {
        this.state.edit ? < input onChange = {
          (e) => this.handleInputChanger(e.target.value)
        }
        /> : <p>{this.props.country}</p>
        } 
        <button onClick = {
          () => this.props.delete(this.props.id)
        }> Let's Keep it Realistic 
        </button>
        <p>Cost: ${this.props.price}</p> 
          {this.state.edit ? < button placeholder='change your mind?' onClick = {
          () => {
          this.props.edit(this.props.id, this.state.input)
          this.handleInputToggle()
          }
        } > Save </button> : <button onClick={() => this.handleInputToggle()}>Edit</button >
        }
        {/* <SumTrips /> */}

      </div>
    )
  }
}

export default Post