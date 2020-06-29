import React, { Component, createRef } from 'react'
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
  //Create ref
  messageRef = createRef()

  componentDidMount() {
    // '/' root in firebase for data for synchrinise
    base.syncState('/', {
      context: this, //our clas s
      state: 'messages'
    })
  }
  // To verify that state is update (I use it for messageRef for scrol the message automaticly in props ref below)
   componentDidUpdate() {
    const ref = this.messageRef.current
    ref.scrollTop = ref.scrollHeight
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
          <div className='messages' ref={this.messageRef}>
            <div className="message">
              {messages}
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
