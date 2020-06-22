import React, { Component } from 'react'
import Formulaire from './components/Formulaire'
import './App.css'
import Message from './components/Message'

//Firebase
import base from './components/base'
class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  componentDidMount() {
    // '/' root in firebase for data for synchrinise
    base.syncState('/', {
      context: this, //our clas s
      state: 'messages'
    })
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({messages});
  }
  render () {
  
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <Message 
      key={key}
      message={this.state.messages[key].message}
      pseudo={this.state.messages[key].pseudo}
       />
    ))
                          
    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <div className="message">
            helloooo  {messages}
            </div>
          </div>
        </div>
        <Formulaire
         length={140}
         pseudo={this.state.pseudo} 
         addMessage={this.addMessage}/>
      </div>
      )
  }
}

export default App
