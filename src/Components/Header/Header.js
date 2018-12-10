import React from 'react'
import './Header.css'

function Header(){
  return(
    <div>
      <h1>Country Bucket List</h1>
      <a id='country-link' href='https://simple.wikipedia.org/wiki/List_of_countries' target='_blank' rel='noopener noreferrer'>Need Ideas?</a>
    </div>
  )
}

export default Header