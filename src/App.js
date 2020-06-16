import React, { Component } from 'react'
import Formulaire from './components/Formulaire'
import './App.css'
import Message from './components/Message'

class App extends Component {
  render () {
    return (
      <div className='box'>
        <div>
          <div className='message'>
            <Message></Message>
          </div>
        </div>
        <Formulaire/>
      </div>
      )
  }
}

export default App
