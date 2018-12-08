import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Post from './Components/Post/Post'
import axios from 'axios';


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
  }
  componentDidMount(){
    axios.get('/api/countries')
    .then(res => {
      // console.log(res.data)
      this.setState({
        posts: res.data
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
        posts: res.data
      })
    })
  }
  handleDelete(id){
    axios.delete(`/api/countries/${id}`)
    .then(res => {
      this.setState({
        posts:res.data
      })
    })
  }
  handleInputToggle(){

  }
  handleEdit(id, country){
    // console.log(id, country);
    axios.put(`/api/countries/${id}`, {country: country})
    .then(res => {
      console.log(res)
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
         <Header />
         
         <div>
            <input onChange= {(e) => this.handleUserInput(e.target.value)}/>
            <button onClick= {this.handleAddCountry} >Add Country</button>
           {displayCountries}
         </div>
      </div>
    );
  }
}

export default App;
