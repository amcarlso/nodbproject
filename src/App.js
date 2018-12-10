import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Post from './Components/Post/Post'
import axios from 'axios';
import AddCountry from './Components/AddCountry/AddCountry';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [],
      input: ''
    }

    this.handleAddCountry = this.handleAddCountry.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount(){
    axios.get('/api/countries')
    .then(res => {
      // console.log(res.data)
      this.setState({
        posts: res.data,
        input: ''
      })
    })
  }
  handleUserInput(value){
    this.setState({
    input: value
    })
  }
  handleAddCountry(){
    axios.post('/api/country', {text: this.state.input})
    .then(res => {
      this.setState({
      posts: res.data,
      input: ''
      })
      console.log(res)
    })
  }
  handleDelete(id){
    axios.delete(`/api/countries/${id}`)
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
  }
  handleEdit(id, country){
    // console.log(id, country);
    axios.put(`/api/countries/${id}`, {country: country})
    .then(res => {
      console.log(res.data)
      this.setState({
        posts:res.data
      })
    })
  }

  
  render() {
    const displayCountries = this.state.posts.map((country, index) =>{
      return <Post key={index} id={country.id} country={country.country} delete={this.handleDelete} edit={this.handleEdit} />
    })
    return (
      <div className="App">
        <Header id="header"/>
        <AddCountry 
          handleUserInputFn={this.handleUserInput} 
          handleAddCountryFn={this.handleAddCountry}
          input={this.state.input}
        />
        
          <div className='post-box'>
          {displayCountries}
          </div>
      </div>
    );
  }
}

export default App;
