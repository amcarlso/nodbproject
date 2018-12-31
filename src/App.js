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
      input: '',
      priceInput: ''
    }

    this.handleAddCountry = this.handleAddCountry.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handlePrice = this.handlePrice.bind(this)
  }
  componentDidMount(){
    axios.get('/api/countries')
    .then(res => {
      // console.log(res.data)
      this.setState({
        posts: res.data,
        input: '',
        priceInput: '' 
      })
    })
  }
  handleUserInput(value){
    this.setState({
    input: value
    })
  }
  handleAddCountry(){
    axios.post('/api/country', {text: this.state.input, price: this.state.priceInput})
    .then(res => {
      this.setState({
      posts: res.data,
      input: '',
      priceInput: ''
      })
      // console.log(res.data)
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
  handleEdit(id, country, price){
    // console.log(id, country);
    axios.put(`/api/countries/${id}`, {country: country, price: price})
    .then(res => {
      console.log(res.data)
      this.setState({
        posts:res.data,
        priceInput: ''
      })
    })
  }
  handlePrice(cost){
    this.setState({
      priceInput: cost
    })
  }

  
  render() {
    console.log(this.state.posts)
    let total = 0;
    const displayCountries = this.state.posts.map((country, index) =>{
      total += +country.price
      return <Post key={index} id={country.id} country={country.country} delete={this.handleDelete} edit={this.handleEdit} price={country.price} />
    })
    return (
      <div className="App">
        <Header id="header"/>
        <AddCountry 
          handleAddCountryFn={this.handleAddCountry}
          handleUserInputFn={this.handleUserInput} 
          input={this.state.input}
          handlePriceFn={this.handlePrice}
          priceInput={this.state.priceInput}
        />
        <div className='post-box'>
          {displayCountries}
          <div id='total-style'>
            {`Total: ${total}`}
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
